import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  expenses: [],
  incomes: [],
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
  },
});

export const { setTransactions } = transactionSlice.actions;

export const selectTransactions = (state) => state.transaction.transactions;
export const selectExpenses = (state) => state.transaction.expenses;
export const selectIncomes = (state) => state.transaction.incomes;

export default transactionSlice.reducer;
