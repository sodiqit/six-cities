import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
import { store } from 'store';
import { userSignInSuccessAction, userSignInFailAction } from 'store/user/actions';
import { loadRoomsSuccess } from 'store/room/actions';
import { Room } from './types';
import firebaseConfig from './config.json';

class Api {
  auth: firebase.auth.Auth;

  firestore: firebase.firestore.Firestore;

  rooms: firebase.firestore.CollectionReference;

  users: firebase.firestore.CollectionReference;

  analytics: firebase.analytics.Analytics;

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }

    this.firestore = firebase.firestore();
    this.auth = firebase.auth();
    this.analytics = firebase.analytics();

    this.rooms = this.firestore.collection('rooms');
    this.users = this.firestore.collection('users');
    this.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    this.auth.onAuthStateChanged(async (user) => {
      if (user && user.email) {
        store.dispatch(userSignInSuccessAction(user.email));
        const isExist = (await this.users.doc(user.uid).get()).exists;
        if (!isExist) {
          await this.users.doc(user.uid).set({ favorites: {} });
        } else {
          await this.updateRoomsWithUserInfo();
        }
      } else {
        store.dispatch(userSignInFailAction());
      }
      return null;
    });
  }

  async changeFavorite(data: { id: number; isFavorite: boolean }) {
    const { id, isFavorite } = data;
    const { currentUser } = this.auth;
    if (currentUser) {
      const doc = this.users.doc(currentUser.uid);
      const docData = (await doc.get()).data();
      if (docData) {
        const string = `favorites.${id}`;
        doc.update({
          [string]: isFavorite,
        });
      }
    } else {
      throw new Error('not logged user');
    }
  }

  async updateRoomsWithUserInfo() {
    const { currentUser } = this.auth;
    const doc = this.users.doc(currentUser!.uid);
    const docData = (await doc.get()).data();
    const rooms = await this.getRooms();
    if (docData) {
      const { favorites } = docData;

      const updatedRooms = rooms.map((room) => {
        if (favorites[room.id]) {
          return { ...room, is_favorite: true };
        }
        return room;
      });

      store.dispatch(loadRoomsSuccess(updatedRooms as Room[]));
    }
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
