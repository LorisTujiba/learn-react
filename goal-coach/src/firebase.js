import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCoy9UWZ87G-7Ig7FJYP4GfN54VqClDu_o",
    authDomain: "goal-coach-f6917.firebaseapp.com",
    databaseURL: "https://goal-coach-f6917.firebaseio.com",
    projectId: "goal-coach-f6917",
    storageBucket: "",
    messagingSenderId: "234173359517"
};
export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
