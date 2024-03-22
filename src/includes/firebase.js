import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyDVe06b0m3MEj8l_YipQI44cvydhl9AwHQ',
  authDomain: 'music-2e4af.firebaseapp.com',
  projectId: 'music-2e4af',
  storageBucket: 'music-2e4af.appspot.com',
  appId: '1:91065249563:web:792f4105fb076544f0adbe'
}
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, commentsCollection, storage }
