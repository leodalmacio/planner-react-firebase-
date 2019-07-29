const functions = require('firebase-functions');
const firebase = require('firebase');
const app = require('express')();

const {
    getAllScreams,
    postOneScream,
} = require('./handlers/screams');

const {
    signup,
    login
} = require('./handlers/users');



firebase.initializeApp(firebaseConfig);

// Scream Routes

// Get All Screams
app.get('/screams', getAllScreams);

// Post one scream
app.post('/scream', FBAuth, postOneScream);

// Sign-up route
app.post('/signup', signup);

app.post('/login', login)

exports.api = functions.region('asia-east2').https.onRequest(app);