import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// default config
// const firebaseConfig = {
//   apiKey: 'AIzaSyAOWHBpPhKoNhcGFKHH_Q_0AtL2gV-imgQ',
//   authDomain: 'production-a9404.firebaseapp.com',
//   databaseURL: 'https://production-a9404.firebaseio.com',
//   projectId: 'production-a9404',
//   storageBucket: 'production-a9404.appspot.com',
//   messagingSenderId: '525472070731',
//   appId: '1:525472070731:web:ee873bd62c0deb7eba61ce',
// };

// firebase / isanioka@gmail.com
var firebaseConfig = {
  apiKey: "AIzaSyDr5HWRHr8JRjO234P0drW9FWUHEEjj15U",
  authDomain: "rn-firebase-boilerplate-eb281.firebaseapp.com",
  projectId: "rn-firebase-boilerplate-eb281",
  storageBucket: "rn-firebase-boilerplate-eb281.appspot.com",
  messagingSenderId: "327127306449",
  appId: "1:327127306449:web:a13b64c4955809d080f5f0",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
