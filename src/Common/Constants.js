export const GET_API_DATA = 'GET_API_DATA';
export const API_DATA_RECEIVED = 'API_DATA_RECEIVED';
export const RESET_REDUX_STORE = 'RESET_REDUX_STORE';

export const AuthToken = 'Bearer ';

//API fetching constants

export const StaticValues = {
  firstAction: 'firstAction',
  getAllProducts: 'getAllProducts',
  getSingleProduct: 'getSingleProduct',

  getUserDetails: 'getUserDetails',
  getSingleUser: 'getSingleUser',
};

export const HTTP = {
  GET_ALL_PRODUCTS: 'https://fakestoreapi.com/products',
  GET_SINGLE_PRODUCT: 'https://fakestoreapi.com/products/',

  GET_USER_DETAILS: 'https://mocki.io/v1/f1a88b7b-1aca-43ad-ac6a-98b937ad6683', //
  GET_SINGLE_USER: 'https://mocki.io/v1/247989fd-a74b-4fe6-a85d-d9a05bc885ca',

  //headers for api call without authorization
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },

  AuthHeader: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: AuthToken,
  },

  formDataHeader: {
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
    Authorization: AuthToken,
  },
};
