import { configureStore } from "@reduxjs/toolkit";
import members from "../modules/members";


const store = configureStore({
  reducer: {
    members,
  },
});

export default store;