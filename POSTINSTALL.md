### How to Use

You can test out this extension right away!

1.  Go to your [Cloud Firestore dashboard](https://console.firebase.google.com/project/${param:PROJECT_ID}/firestore/data) in the Firebase console.

1.  If it doesn't already exist, create the collection you specified during installation: `${param:COLLECTION}`.

1.  Add a document with a `flowId` field and a `mobile` field with the following content:

    ```js
    flowId: 'YOUR_MSG91_FLOW_ID',
    mobile: 'MOBILE_NUMBER_WITH_COUNTRY_CODE'
    vars: {
      varKey: value
    }
    ```

1.  In a few seconds, you'll see a `delivery` field appear in the document. The field will update as the extension processes the sms.
