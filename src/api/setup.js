import { Database } from '~/database';

export const db = new Database('app_state_v1', { projects: [] });

export const authDB = new Database('woorkroom.auth', {
  rememberMe: false,
  signin: { email: '', password: '' },
});
