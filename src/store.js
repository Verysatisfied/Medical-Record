// store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // Import the redux-thunk middleware
import sidebarReducer from "./reducers/sidebarReducer";
import userReducer from "./reducers/userSlice";
import appointmentSlice from "./reducers/appointmentSlice";
import allRecordsSlice from "./reducers/allRecordsSlice";
import userImageSlice from "./reducers/userImageSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
    appointment: appointmentSlice,
    allRecords: allRecordsSlice,
    userImage: userImageSlice,
  },
  middleware: [thunk],
});

export default store;
