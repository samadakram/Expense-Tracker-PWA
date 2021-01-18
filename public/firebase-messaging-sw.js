importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyC9TTKTzrQX2EhWeoJIcbeTlcFRpEMNI8A",
    authDomain: "fir-messaging-dbf7d.firebaseapp.com",
    projectId: "fir-messaging-dbf7d",
    storageBucket: "fir-messaging-dbf7d.appspot.com",
    messagingSenderId: "601388926086",
    appId: "1:601388926086:web:04feb7e786ab47fef97d07"
});

firebase.messaging();