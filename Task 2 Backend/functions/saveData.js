const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.saveJsonData = functions.https.onCall((data, context) => {
  const jsonData = data.jsonData;
  const ref = admin.database().ref('data');
  return ref.set(jsonData);
});