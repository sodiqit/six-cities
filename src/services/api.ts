import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import { store } from 'store';
import { userSignInSuccessAction, userSignInFailAction } from 'store/user/actions';
import firebaseConfig from './config.json';

class Api {
  auth: firebase.auth.Auth;

  firestore: firebase.firestore.Firestore;

  rooms: firebase.firestore.CollectionReference;

  analytics: firebase.analytics.Analytics;

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.analytics = firebase.analytics();

    this.rooms = this.firestore.collection('rooms');
    this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    this.auth.onAuthStateChanged((user) => {
      if (user && user.email) {
        store.dispatch(userSignInSuccessAction(user.email));
      } else {
        store.dispatch(userSignInFailAction());
      }
      return null;
    });
  }

  async getRooms() {
    const roomsDocs = await this.rooms.get();
    const rooms = roomsDocs.docs.map((roomDoc) => roomDoc.data());
    return rooms;
  }

  async signIn(data: { email: string; password: string }) {
    const { email, password } = data;

    const result = await this.auth.signInWithEmailAndPassword(email, password);

    return result.user?.email;
  }

  async createUser(data: { email: string; password: string }) {
    const { email, password } = data;
    const result = await this.auth.createUserWithEmailAndPassword(email, password);
    return result;
  }
}

export default new Api();
