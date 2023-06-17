import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigation/navigationSlice";
import transactionSlice from "../features/transaction/transactionSlice";

export default configureStore({
  reducer: {
    navigation: navigationReducer,
    transaction: transactionSlice,
  },
});
