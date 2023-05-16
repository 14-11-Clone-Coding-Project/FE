import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "members",
  initialState: [],
  reducers: {
    setMember: (state, action) => {
      console.log("state=> ", state);
      console.log("action.payload=> ", action.payload);
      return [...state, action.payload];
    },
  },
});

export default membersSlice.reducer;
export const { setMember } = membersSlice.actions;
