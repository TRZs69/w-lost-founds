import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authLoginReducer from "./authLogin/reducer";
import isPreloadReducer from "./isPreload/reducer";
import isAuthRegisterReducer from "./isAuthRegister/reducer";
import isUserChangePhotoReducer from "./isUserChangePhoto/reducer";
import { 
  lostfoundsReducer, 
  isAddLostFoundReducer, 
  isDeleteLostFoundReducer, 
  isEditLostFoundReducer, 
  detailLostFoundReducer, 
  statsReducer 
} from "./lostfounds/reducer"; // Adjust the import path according to your folder structure

// Combine reducers
const rootReducer = combineReducers({
  // Lost and Found
  lostfounds: lostfoundsReducer,
  isAddLostFound: isAddLostFoundReducer,
  isDeleteLostFound: isDeleteLostFoundReducer,
  isEditLostFound: isEditLostFoundReducer,
  detailLostFound: detailLostFoundReducer,
  stats: statsReducer,

  // Auth
  isAuthRegister: isAuthRegisterReducer,
  authLogin: authLoginReducer,
  isPreload: isPreloadReducer,
  
  // Profile
  isUserChangePhoto: isUserChangePhotoReducer,
  
  // Other reducers
  loadingBar: loadingBarReducer,
});

// Configure store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;

