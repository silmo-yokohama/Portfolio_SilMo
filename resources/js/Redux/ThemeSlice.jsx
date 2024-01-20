import { Themes } from "@/Constants/Themes";
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "ThemeSwitch",
  initialState: {
    active: window.localStorage.getItem("theme") || Themes.light,
  },
  reducers: {
    themeToggle: (state) => {
      state.active = state.active === Themes.dark ? Themes.light : Themes.dark;
    },
    themeChange: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { themeToggle, themeChange } = themeSlice.actions;
export default themeSlice.reducer;
