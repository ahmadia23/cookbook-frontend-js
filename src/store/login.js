import { createSlice } from "@reduxjs/toolkit";
//vérifier si le cookbook existe
// s'il existe updater le cookbook existant

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setLogin: (state, action) => {
      if (! state.isLoggedIn){
        state.isLoggedIn = !state.isLoggedIn
      }
    }
  },
});


export default authSlice;

export const loginActions = authSlice.actions;

// addNewCookbook: (state, action) => {
//   const newCookbook = action.payload;
//   const existingCookbookIndex = state.cookbooks.findIndex(
//     (cookbook) => cookbook.id === newCookbook.id
//   );
//   if (existingCookbookIndex) {
//     return (state.cookbooks[existingCookbookIndex] = newCookbook);
//   } else {
//     return state.cookbooks.push(newCookbook);
//   }
//   return;
// },
