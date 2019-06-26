const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello ninjas!");
});

const createNotification = notification => {
  return admin
    .firestore()
    .collection("notification")
    .add(notification)
    .then(doc => console.log("notifcation added", doc));
};

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    //  Notification data
    const project = doc.data();
    const notification = {
      content: "Addeda a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });
