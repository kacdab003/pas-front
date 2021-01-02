const API_URL = process.env.NODE_ENV === 'production' ? ' ' : 'http://localhost:3000';

export const userAuthEndpoints = {
  login: API_URL + '/login',
  signUp: API_URL + '/signup',
};
