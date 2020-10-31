import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
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
  }

  // eslint-disable-next-line class-methods-use-this
  async getRooms() {
    // const roomsDocs = await this.rooms.orderBy('price', 'asc').get();
    // const rooms = roomsDocs.docs.map((roomDoc) => roomDoc.data());
    // return rooms;
    return [];
  }

  async signIn(data: { email: string; password: string }) {
    const { email, password } = data;

    const result = await this.auth.signInWithEmailAndPassword(email, password);

    return result.user?.email;
  }

  async isAuth() {
    const { currentUser } = this.auth;

    if (currentUser) return currentUser.email;
    return null;
  }

  async createUser(data: { email: string; password: string }) {
    const { email, password } = data;
    const result = await this.auth.createUserWithEmailAndPassword(email, password);
    return result;
  }
}

export default new Api();
