import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import {Alert} from 'react-native';
import {auth} from './../../config/firebase';

/**
 * CONSTANTS
 */
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

/**
 * ACTIONS CREATORS
 */
const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

/**
 * VARIABLES FIREBASE
 */

export const tryLogin =
  ({email, password}) =>
  dispatch => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        dispatch(userLoginSuccess(user));
        return user;
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          return new Promise((resolve, reject) => {
            Alert.alert(
              'Usuário não encontrado',
              'Deseja criar um cadastro com as informações inseridas?',
              [
                {
                  text: 'Não',
                  onPress: () => resolve(),
                  style: 'cancel',
                },
                {
                  text: 'Sim',
                  onPress: () => {
                    createUserWithEmailAndPassword(auth, email, password)
                      .then(resolve)
                      .catch(reject);
                  },
                },
              ],
              {cancelable: false},
            );
          });
        }
      });
  };
