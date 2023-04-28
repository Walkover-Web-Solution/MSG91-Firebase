# Send messages with MSG91

**Author**: MSG91

**Description**: This Firebase extension allows users to send SMS messages from a collection of documents in real-time using the Msg91 service. Users can create a document in the specified collection with the recipient's phone number and the message to be sent, and the extension will automatically process the message and update the document with the status of the message delivery. This extension is a cost-effective solution for businesses and developers who need to send SMS messages at scale.
#### Additional setup

Before installing this extension, make sure that you've [set up a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart) in your Firebase project.

#### Billing
To install an extension, your project must be on the [Blaze (pay as you go) plan](https://firebase.google.com/pricing)

- This extension uses other Firebase and Google Cloud Platform services, which have associated charges if you exceed the service’s no-cost tier:
  - Cloud Firestore
  - Cloud Functions (Node.js 10+ runtime. [See FAQs](https://firebase.google.com/support/faq#extensions-pricing))

Usage of this extension also requires you to have SMTP credentials for mail delivery. You are responsible for any associated costs with your usage of your SMTP provider.



**Configuration Parameters:**

* Cloud Functions location: Where do you want to deploy the functions created for this extension? You usually want a location close to your database. Realtime Database instances are located in `us-central1`. For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).

* MSG91 Auth AUTH_KEY: You can get your Auth Key from MSG91 console.

* Message COLLECTION: Path to the collection where you need to add documents in order to send messages.



**Cloud Functions:**

* **processMsg:** Will send sms for each record you add to above collection



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: This extension needs to read the documents to process the messages.)
