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
  }

  // eslint-disable-next-line class-methods-use-this
  async getRooms() {
    // const roomsDocs = await this.rooms.orderBy('price', 'asc').get();
    // const rooms = roomsDocs.docs.map((roomDoc) => roomDoc.data());
    // return rooms;
    return [];
  }
}

export default new Api();
