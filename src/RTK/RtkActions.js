import {GET_API_DATA, HTTP, StaticValues} from '../Common/Constants';
import {LOG} from '../Common/utils';

export const getAllProducts = jsonData => {
  LOG('GET ALL PRODUCTS IN ACTION :', jsonData);
  return {
    jsonData: jsonData,
    requestType: StaticValues.getAllProducts,
    requestUrl: HTTP.GET_ALL_PRODUCTS,
    get: true,
  };
};

export const getSingleProduct = jsonData => {
  LOG('GET SINGLE PRODUCT IN ACTION :', jsonData);
  return {
    requestType: StaticValues.getSingleProduct,
    requestUrl: HTTP.GET_SINGLE_PRODUCT,
    jsonData: jsonData,
    get: true,
  };
};

export const getUserDetails = jsonData => {
  LOG('GET USER DETAILS IN ACTION :', jsonData);
  return {
    requestType: StaticValues.getUserDetails,
    requestUrl: HTTP.GET_USER_DETAILS,
    jsonData: jsonData,
    get: true,
  };
};

export const getSingleUser = jsonData => {
  LOG('GET SINGLE IN ACTION :', jsonData);
  return {
    requestType: StaticValues.getSingleUser,
    requestUrl: HTTP.GET_SINGLE_USER,
    jsonData: jsonData,
    get: true,
  };
};
