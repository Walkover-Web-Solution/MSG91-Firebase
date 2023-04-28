This Firebase extension allows users to send SMS messages from a collection of documents in real-time using the Msg91 service. Users can create a document in the specified collection with the recipient's phone number and the message to be sent, and the extension will automatically process the message and update the document with the status of the message delivery. This extension is a cost-effective solution for businesses and developers who need to send SMS messages at scale.

### Auth Key
1. Log in to the MSG91 panel and select the Authkey option from the username dropdown. You can also access this dropdown from the bottom left if you are inside any service dashboard.

2. Enter the registered mobile number and verify with the OTP you will receive on the registered number.

3. Click on the Create New option to create an authkey.

4. Name the Authkey as per your preference and select “where are you integrating”. Please make sure there is no special character in this section.

5. A new key will be created and there will be an option to copy it.

[Follow official doc for up to date information](https://msg91.com/help/where-can-i-find-my-authentication-key)

#### Additional setup

Before installing this extension, make sure that you've [set up a Cloud Firestore database](https://firebase.google.com/docs/firestore/quickstart) in your Firebase project.

#### Billing
To install an extension, your project must be on the [Blaze (pay as you go) plan](https://firebase.google.com/pricing)

- This extension uses other Firebase and Google Cloud Platform services, which have associated charges if you exceed the service’s no-cost tier:
  - Cloud Firestore
  - Cloud Functions (Node.js 10+ runtime. [See FAQs](https://firebase.google.com/support/faq#extensions-pricing))

Usage of this extension also requires you to have SMTP credentials for mail delivery. You are responsible for any associated costs with your usage of your SMTP provider.