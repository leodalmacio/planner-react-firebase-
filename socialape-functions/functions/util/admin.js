const admin = require('firebase-admin');

var serviceAccount = require("../socialape-3ed53-firebase-adminsdk-bs6zs-cd188a6ebe.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://socialape-3ed53.firebaseio.com/',
    databaseAuthVariableOverride: {
        uid: "myServiceWorker"
    },
    storageBucket: 'gs://socialape-3ed53.appspot.com/'
});

// admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };