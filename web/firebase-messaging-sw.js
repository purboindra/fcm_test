importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDH8_i05waMsfhGDFgyXBJRmwvAW5g1FtU",
  appId: "1:991930593263:android:636f9c711dca175de7d01a",
  messagingSenderId: "991930593263",
  projectId: "test-fcm-3b5dc",
  authDomain: "flutterfire-e2e-tests.firebaseapp.com",
  databaseURL:
    "https://flutterfire-e2e-tests-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "flutterfire-e2e-tests.appspot.com",
  measurementId: "G-JN95N1JV2E",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
