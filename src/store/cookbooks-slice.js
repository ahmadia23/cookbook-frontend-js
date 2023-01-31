import { createSlice } from "@reduxjs/toolkit";
//vérifier si le cookbook existe
// s'il existe updater le cookbook existant

const cookbooks = createSlice({
  initialState: {
    cookbooks: [
      {
        name: "",
        description: "",
        theme: "",
      },
    ],
  },
  reducers: {
    addNewCookbook: (state, action) => {
      const newCookbook = action.payload;
      const existingCookbookIndex = state.cookbooks.findIndex(
        (cookbook) => cookbook.id === newCookbook.id
      );
      if (existingCookbookIndex) {
        return (state.cookbooks[existingCookbookIndex] = newCookbook);
      } else {
        return state.cookbooks.push(newCookbook);
      }
      return;
    },
  },
});


export default cookbookSlice;

export const cookbookActions = cookbooks.actions;
