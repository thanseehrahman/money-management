import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  expenses: [],
  incomes: [],
  form: false,
  deleteBox: false,
  cache: {
    title: "",
    type: "",
    group: "",
  },
  groups: [
    { value: "primary income", type: "income" },
    { value: "secondary income", type: "income" },
    { value: "investment income", type: "income" },
    { value: "essential expense", type: "expense" },
    { value: "discretionary expense", type: "expense" },
    { value: "savings and investment", type: "expense" },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.expenses = action.payload.expenses;
      state.incomes = action.payload.incomes;
    },
    openCategoryForm: (state) => {
      state.form = true;
    },
    closeCategoryForm: (state) => {
      state.form = false;
    },
    openCategoryDeleteBox: (state) => {
      state.deleteBox = true;
    },
    closeCategoryDeleteBox: (state) => {
      state.deleteBox = false;
    },
    setCategoryCache: (state, action) => {
      state.cache.title = action.payload.title;
      state.cache.type = action.payload.type;
      state.cache.group = action.payload.group;
    },
  },
});

export const {
  setCategories,
  openCategoryForm,
  closeCategoryForm,
  openCategoryDeleteBox,
  closeCategoryDeleteBox,
  setCategoryCache,
} = categorySlice.actions;

export const selectCategories = (state) => state.category.categories;
export const selectExpenseCategories = (state) => state.category.expenses;
export const selectIncomeCategories = (state) => state.category.incomes;
export const selectCategoryForm = (state) => state.category.form;
export const selectCategoryDeleteBox = (state) => state.category.deleteBox;
export const selectCategoryCache = (state) => state.category.cache;
export const selectGroups = (state) => state.category.groups;

export default categorySlice.reducer;
