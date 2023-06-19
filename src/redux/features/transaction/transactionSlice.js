import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  expenses: [],
  incomes: [],
  form: false,
  updateForm: false,
  deleteBox: false,
  cache: {
    title: "",
    amount: "",
    date: "",
    type: "",
    category: "",
    categoryId: "",
  },
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload.transactions;
      state.expenses = action.payload.expenses;
      state.incomes = action.payload.incomes;
    },
    openForm: (state) => {
      state.form = true;
    },
    closeForm: (state) => {
      state.form = false;
    },
    openUpdateForm: (state) => {
      state.updateForm = true;
    },
    closeUpdateForm: (state) => {
      state.updateForm = false;
    },
    openDeleteBox: (state) => {
      state.deleteBox = true;
    },
    closeDeleteBox: (state) => {
      state.deleteBox = false;
    },
    setCache: (state, action) => {
      state.cache.title = action.payload.title;
      state.cache.amount = action.payload.amount;
      state.cache.date = action.payload.date;
      state.cache.category = action.payload.category;
      state.cache.categoryId = action.payload.categoryId;
    },
  },
});

export const {
  setTransactions,
  openForm,
  closeForm,
  openUpdateForm,
  closeUpdateForm,
  openDeleteBox,
  closeDeleteBox,
  setCache,
} = transactionSlice.actions;

export const selectTransactions = (state) => state.transaction.transactions;
export const selectExpenses = (state) => state.transaction.expenses;
export const selectIncomes = (state) => state.transaction.incomes;
export const selectForm = (state) => state.transaction.form;
export const selectUpdateForm = (state) => state.transaction.updateForm;
export const selectDeleteBox = (state) => state.transaction.deleteBox;
export const selectCache = (state) => state.transaction.cache;

export default transactionSlice.reducer;
