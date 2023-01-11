import firebase from 'firebase'


const app = firebase.initializeApp({
    apiKey: "AIzaSyDhLgiuYDi08bouI76w2JUmEjnbRmTKUDg",
    authDomain: "tech-4dea8.firebaseapp.com",
    projectId: "tech-4dea8",
    storageBucket: "tech-4dea8.appspot.com",
    messagingSenderId: "678622204049",
    appId: "1:678622204049:web:285f10fbcc76ddab82af30"
})


// export const auth = app.auth()
export default app 