const functions = require('firebase-functions');
const app = require('express')();

const FBAuth = require('./util/fbAuth');
const adminAuth = require('./util/adminAuth');

const {
    getAllScreams,
    postOneScream,
} = require('./handlers/screams');

const {
    signup,
    login,
    uploadImage
    // setAdmin
} = require('./handlers/users');


// Scream Routes
// Get All Screams
app.get('/screams', getAllScreams);
// Post one scream
app.post('/scream', FBAuth, postOneScream);


// User Routes
// Sign-up route
app.post('/signup', signup);
app.post('/login', login)
app.post('/user/image', FBAuth, uploadImage);
// app.post('/admin', setAdmin);

// app.post('/admin/user', adminAuth, signup);

exports.api = functions.region('asia-east2').https.onRequest(app);
