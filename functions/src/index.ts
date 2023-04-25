import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import config from './config';
import msg91 from 'msg91';
const { logger } = functions;
let initialized = false;
let sms: any;

interface Msg {
    id?: string;
    flowId?: string;
    mobile?: string;
    delivery: {
        startTime: FirebaseFirestore.Timestamp;
        endTime?: FirebaseFirestore.Timestamp;
        status: "PENDING" | "RETRY" | "SUCCESS" | "ERROR";
        attempts: number;
        error?: string;
    }
}


function initialize() {
    if (initialized === true) return;
    initialized = true;
    logger.log(`Initializing Firebase admin`)
    admin.initializeApp();
    logger.log(`Initializing Firestore`)
    // firestore = admin.firestore();
    logger.log(`Initializing MSG91`)
    msg91.initialize({
        authKey: config.msg91.authKey as any
    });
    logger.log(`Initializing MSG91 SMS`);
    sms = msg91.getSMS();
}

async function processWrite(change: functions.Change<functions.firestore.DocumentSnapshot>) {
    var defaultMsg: Msg = {
        delivery: {
            startTime: admin.firestore.FieldValue.serverTimestamp() as FirebaseFirestore.Timestamp,
            // endTime: admin.firestore.FieldValue.serverTimestamp() as FirebaseFirestore.Timestamp,
            status: "PENDING",
            attempts: 0
        }
    }
    let msgRef = change.after?.ref;
    let msg: Msg = { ...defaultMsg, ...change.after.data() };
    msg.delivery.attempts += 1;
    let status = msg?.delivery?.status;
    switch (status) {
        case "PENDING":
        case "RETRY":
            if (!msg?.flowId) {
                msg.delivery.status = "ERROR";
                msg.delivery.error = "flowId is required";
                break;
            }
            if (!msg?.mobile) {
                msg.delivery.status = "ERROR";
                msg.delivery.error = "mobile is required";
                break;
            }
            // Send SMS
            try {
                const result = await sms.send(msg.flowId, { ...change.after.data(), delivery: null });
                msg.id = result?.message;
                msg.delivery.status = "SUCCESS";
            } catch (error) {
                msg.delivery.status = "ERROR";
                msg.delivery.error = "" + error
            }
            break;
        case "SUCCESS":
        case "ERROR":
            return null;
        default:
            logger.log("Invalid status");
            return null;
            break;

    }
    return await msgRef.update(msg as any);


}

export const processMsg = functions.firestore.document(`${config.collection}/{messageId}`).onWrite(
    async (change) => {
        initialize();
        try {
            return await processWrite(change);
        } catch (error) {
            return null;
        }
    }
);
