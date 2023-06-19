import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Sidebar from "../navigation/Sidebar";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import {
  selectDeleteBox,
  selectForm,
  selectUpdateForm,
  setTransactions,
} from "../../redux/features/transaction/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryDeleteBox,
  selectCategoryForm,
  setCategories,
} from "../../redux/features/category/categorySlice";
import Popup from "../popups/Popup";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "transactions"), orderBy("date", "desc"));
    const r = query(collection(db, "categories"), orderBy("time", "desc"));

    onSnapshot(q, (querySnapshot) => {
      let transactions = [];
      let expenses = [];
      let incomes = [];

      querySnapshot.forEach((doc) => {
        transactions.push({ ...doc.data(), id: doc.id });

        switch (doc.data().type) {
          case "expense":
            expenses = [...expenses, { ...doc.data(), id: doc.id }];
            break;
          case "income":
            incomes = [...incomes, { ...doc.data(), id: doc.id }];
            break;
          default:
            console.log("Data not available");
        }
      });

      dispatch(
        setTransactions({
          transactions: transactions,
          expenses: expenses,
          incomes: incomes,
        })
      );
    });

    onSnapshot(r, (querySnapshot) => {
      let categories = [];
      let expenses = [];
      let incomes = [];

      querySnapshot.forEach((doc) => {
        categories.push({ ...doc.data(), id: doc.id });

        switch (doc.data().type) {
          case "expense":
            expenses = [...expenses, { ...doc.data(), id: doc.id }];
            break;
          case "income":
            incomes = [...incomes, { ...doc.data(), id: doc.id }];
            break;
          default:
            console.log("Data not available");
        }
      });

      dispatch(
        setCategories({
          categories: categories,
          expenses: expenses,
          incomes: incomes,
        })
      );
    });
  }, []);

  const transactionForm = useSelector(selectForm);
  const updateTransactionForm = useSelector(selectUpdateForm);
  const deleteTransactionBox = useSelector(selectDeleteBox);
  const categoryForm = useSelector(selectCategoryForm);
  const deleteCategoryBox = useSelector(selectCategoryDeleteBox);

  return (
    <Container>
      {transactionForm ? <Popup type="transaction" /> : null}
      {updateTransactionForm ? <Popup type="updateTransaction" /> : null}
      {deleteTransactionBox ? <Popup type="deleteTransaction" /> : null}
      {categoryForm ? <Popup type="category" /> : null}
      {deleteCategoryBox ? <Popup type="deleteCategory" /> : null}
      <Sidebar />
      <Layout>
        <Overlay />
        <Outlet />
      </Layout>
    </Container>
  );
}

const Container = styled.div``;

const Layout = styled.div`
  height: 100vh;
  width: calc(100% - 270px);
  padding: 84px 60px 60px;
  position: relative;
  left: 270px;
  overflow-x: hidden;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  z-index: 2;
`;

export default Home;
