# Send messages with MSG91

**Author**: MSG91 (**[https://github.com/your_username](https://github.com/your_username)**)

**Description**: Best solution for sending cost effective SMS from firebase.



**Configuration Parameters:**

* Cloud Functions location: Where do you want to deploy the functions created for this extension? You usually want a location close to your database. Realtime Database instances are located in `us-central1`. For help selecting a location, refer to the [location selection guide](https://firebase.google.com/docs/functions/locations).

* MSG91 Auth AUTH_KEY: You can get your Auth Key from MSG91 console.

* Message COLLECTION: Path to the collection where you need to add documents in order to send messages.



**Cloud Functions:**

* **processQueue:** undefined



**Access Required**:



This extension will operate with the following project IAM roles:

* datastore.user (Reason: This extension needs to read the documents to process the messages.)
