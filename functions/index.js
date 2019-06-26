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

// Triggers for procject creation
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

// Triggers for new user jointed plateform
exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the party",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };

      return createNotification(notification);
    });
});
