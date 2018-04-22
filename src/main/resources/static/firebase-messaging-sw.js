importScripts('../js/firebase-app.js');
importScripts('../js/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyDp6LTYQuvD1YslLcVXhG-IfWtDU9ZzapQ",
    authDomain: "push-notification-2362d.firebaseapp.com",
    databaseURL: "https://push-notification-2362d.firebaseio.com",
    projectId: "push-notification-2362d",
    storageBucket: "push-notification-2362d.appspot.com",
    messagingSenderId: "764866992666"
  };
  firebase.initializeApp(config);
  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '../images/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
  });
