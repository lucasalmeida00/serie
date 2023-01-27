import {initializeApp} from '@firebase/app';
import {getAuth} from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdxxLchy4OkLZHbrimLAS3VmXxNaIE9J4',
  authDomain: 'serie-c26e9.firebaseapp.com',
  projectId: 'serie-c26e9',
  storageBucket: 'serie-c26e9.appspot.com',
  messagingSenderId: '38678955251',
  appId: '1:38678955251:web:e41329f924e8938c386386',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
