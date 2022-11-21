export default {
    location: process.env.LOCATION,
    collection: process.env.COLLECTION || "messages",
    msg91: {
        authKey: process.env.AUTH_KEY
    }
}