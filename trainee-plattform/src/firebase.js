import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC6ek8lZniIWT2gVKzpFADYTIh1AaPSxNg",
    authDomain: "auth-dev-daad0.firebaseapp.com",
    projectId: "auth-dev-daad0",
    storageBucket: "auth-dev-daad0.appspot.com",
    messagingSenderId: "123547537208",
    appId: "1:123547537208:web:4d01b9d4b28153b921bbcd"
})
export const auth = app.auth()
export default app