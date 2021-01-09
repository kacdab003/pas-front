const API_URL = process.env.NODE_ENV === 'production' ? ' ' : 'http://localhost:3001';

export const userAuthEndpoints = {
  login: API_URL + '/login',
  signUp: API_URL + '/signup',
};

export const archiveEndpoints = {
  get: API_URL + '/reports',
};

export const exchangeReportEndpoints = {
  post: API_URL + '/exchangeReports',
};

export const objectEndpoints = {
  post: API_URL + '/objects',
};

export const moduleEndpoints = {
  get: API_URL + '/modules',
};

export const moduleStateAEndpoints = {
  get: API_URL + '/moduleStateAs',
};

export const moduleStateBEndpoints = {
  get: API_URL + '/moduleStateBs',
};

export const moduleStateCEndpoints = {
  get: API_URL + '/moduleStateCs',
};

export const objectEndpoints = {
  get: API_URL + '/objects',
};

export const userEndpoints = {
  get: API_URL + '/workers',
};
