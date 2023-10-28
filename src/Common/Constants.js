export const GET_API_DATA = 'GET_API_DATA';
export const API_DATA_RECEIVED = 'API_DATA_RECEIVED';
export const RESET_REDUX_STORE = 'RESET_REDUX_STORE';
export const JUST_STORE = 'JUST_STORE';

export const AuthToken = 'Bearer ';

export const fireBaseServerKey =
  'AAAAxgtn5dY:APA91bFb5n032RFNwdEyZJ0Gqc8Iwdr0-vcnVvqDMjet9tMHnVOWBfpFxzYfaUuEz6NLH0J1oLHZa4QMYyUkWLpNERXIDcOg6mMPOUmPOmRsAHdtBwjVhLMTcswiPLUeqV2-xPAvvWp1';
export const clientToken =
  'd4AdBfZjRnuVb8_AO2thBS:APA91bHhEQRUs-YDWMznTRFExJHMUz1TbMelirUBwctFy9cvvI2hVWqF61QK2163-JNMnk1gFCyKxPRjvFkzYefKSKYRiUPb0y8CZX-zPyX7UKDuYmCWiwWPB_v6iEIqKLD0OXEtGKbh';
//API fetching constants
export const StaticValues = {
  firstAction: 'firstAction',
  getAllProducts: 'getAllProducts',
  getSingleProduct: 'getSingleProduct',

  getUserDetails: 'getUserDetails',
  getSingleUser: 'getSingleUser',

  //official
  saveUserDetails: 'saveUserDetails',
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
