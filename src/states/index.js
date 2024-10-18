import { configureStore } from "@reduxjs/toolkit";
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
} from "./lostfounds/reducer"; // Adjust the import path according to your folder structure

const store = configureStore({
  reducer: {
    // Auth
    isAuthRegister: isAuthRegisterReducer,
    authLogin: authLoginReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,

    // Profile
    isUserChangePhoto: isUserChangePhotoReducer,

    // Lost and Found
    lostFounds: lostfoundsReducer, // Changed from todos to lostFounds
    isAddLostFound: isAddLostFoundReducer, // Changed from isAddTodo
    isDeleteLostFound: isDeleteLostFoundReducer, // Changed from isDeleteTodo
    isEditLostFound: isEditLostFoundReducer, // Changed from isEditTodo
    detailLostFound: detailLostFoundReducer, // Changed from detailTodo
  },
});

export default store;
