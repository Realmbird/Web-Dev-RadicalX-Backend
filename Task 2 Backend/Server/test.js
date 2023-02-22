import { functions } from "./firebase";
import user from "user.json"

const saveJsonToFirebase = functions.httpsCallable("saveJsonToFirebase");

// Example JSON data
const jsonData = user;

// Call the Cloud Function to save the JSON file to Firebase
saveJsonToFirebase({ jsonData })
  .then((result) => {
    console.log(result.data.message); // "JSON file saved successfully."
  })
  .catch((error) => {
    console.error(error);
  });