### To start using this extension, follow these steps:

1. Head to your [Cloud Firestore dashboard](https://console.firebase.google.com/project/${param:PROJECT_ID}/firestore/data) on the Firebase console.

2. If you haven't already, create the collection that you specified during installation, `${param:COLLECTION}`.

3. Create a new document in the collection with a `flowId` field and a `mobile` field, containing the following information:

   ```js
   flowId: 'MSG91_FLOW_ID',
   mobile: 'MOBILE_NUMBER_WITH_COUNTRY_CODE'
   vars: {
     varKey: value
   }
  ```
  Replace MSG91_FLOW_ID with the ID of your Msg91 flow, and MOBILE_NUMBER_WITH_COUNTRY_CODE with the recipient's phone number, including the country code. The `vars` field should contain the variables used in your Msg91 flow.

4. Wait a few seconds for the extension to process the SMS. The document will update with a delivery field that shows the status of the message delivery.



### How to create a (flowId) Template ID to Send SMS?

1. Log in to the MSG91 user panel and select SMS.

1. You will be directed to the Templates section in the sidebar. Click on the Create Template button on the top right.

1. Type your Template Name, DLT Template ID (only for India). Select the sender ID that has been mapped already with your MSG91 panel, and message content to be sent (the Exact message content as approved in the DLT portal in case of India). You can add variables from Add Variable option given below the message box. Once done, click the "Create" button.

NOTE: Variables should be added here in the format as ##name## or ##var##.

4. The template will be created and will show Pending/Rejected. Refresh the screen after some time and the status would be updated. You can copy the Template ID from the copy icon. The version history helps you can keep a track of edits made to your existing templates. Click the dropdown from the 3 dots available on the right side of the template. Add version from the Add version option or Duplicate it to make edits to the existing template.

5. Once the template is approved, don't forget to mark the latest version active by the Mark default option.

[Official Doc](https://msg91.com/help/MSG91/how-to-create-flow-id-to-send-sms-via-api)
