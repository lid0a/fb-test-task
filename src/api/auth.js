import { authDB } from './setup';

export function isAuthenticated() {
  return Boolean(authDB.getData().signin.email);
}

export function signIn({ email, password, rememberMe }) {
  authDB.getData().rememberMe = rememberMe;
  authDB.getData().signin.email = email;
  if (rememberMe) {
    authDB.getData().signin.password = password;
  }
  return true;
}

export function signOut() {
  authDB.getData().rememberMe = false;
  authDB.getData().signin.email = '';
  authDB.getData().signin.password = '';
}
