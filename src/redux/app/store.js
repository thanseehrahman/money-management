import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigation/navigationSlice";
import transactionSlice from "../features/transaction/transactionSlice";
import categorySlice from "../features/category/categorySlice";

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    transaction: transactionSlice,
    category: categorySlice,
  },
});
