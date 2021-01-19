importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDUCizXMZZRRx00gwO1kzzSvJS4neBd9v8",
    authDomain: "expense-tracker-samad.firebaseapp.com",
    projectId: "expense-tracker-samad",
    storageBucket: "expense-tracker-samad.appspot.com",
    messagingSenderId: "276398541172",
    appId: "1:276398541172:web:64b3e606d37acd28300421"
});

firebase.messaging();