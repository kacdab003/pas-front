const API_URL = process.env.NODE_ENV === 'production' ? 'https://rcn-note-api.herokuapp.com' : 'http://localhost:3001';

export const userAuthEndpoints = {
  login: API_URL + '/login',
  signUp: API_URL + '/signup',
};

export const archiveEndpoints = {
  get: API_URL + '/reports',
  delete: API_URL + '/reports/',
  patch: API_URL + '/reports/',
};

export const exchangeReportEndpoints = {
  post: API_URL + '/exchangeReports',
  get: API_URL + '/exchangeReports',
  patch: API_URL + '/exchangeReports/',
  delete: API_URL + '/exchangeReports/',
};

export const newReportEndpoints = {
  post: API_URL + '/reports',
  get: API_URL + '/reports',
};

export const objectEndpoints = {
  post: API_URL + '/objects',
};

export const moduleEndpoints = {
  get: API_URL + '/modules',
};

export const userEndpoints = {
  get: API_URL + '/workers',
};
