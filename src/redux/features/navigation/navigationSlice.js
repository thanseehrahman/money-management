import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [
    {
      title: "Dashboard",
      img: {
        img: "/images/icons/dashboard.svg",
        active: "/images/icons/dashboard-active.svg",
      },
      path: "/",
    },
    {
      title: "Transactions",
      img: {
        img: "/images/icons/transactions.svg",
        active: "/images/icons/transactions-active.svg",
      },
      path: "/transactions",
    },
    {
      title: "Categories",
      img: {
        img: "/images/icons/categories.svg",
        active: "/images/icons/categories-active.svg",
      },
      path: "/categories",
    },
    {
      title: "Help",
      img: {
        img: "/images/icons/help.svg",
        active: "/images/icons/help-active.svg",
      },
      path: "/help",
    },
  ],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
});

export const {} = navigationSlice.actions;

export const selectLinks = (state) => state.navigation.links;

export default navigationSlice.reducer;
