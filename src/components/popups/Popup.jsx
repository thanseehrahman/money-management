import React from "react";
import { styled } from "styled-components";
import Transaction from "../forms/Transaction";
import UpdateTransaction from "../forms/UpdateTransaction";
import DeleteTransaction from "../dialogues/DeleteTransaction";
import Category from "../forms/Category";
import DeleteCategory from "../dialogues/DeleteCategory";
import { useDispatch } from "react-redux";
import {
  closeDeleteBox,
  closeForm,
  closeUpdateForm,
} from "../../redux/features/transaction/transactionSlice";
import {
  closeCategoryDeleteBox,
  closeCategoryForm,
} from "../../redux/features/category/categorySlice";

function Popup({ type }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeForm());
    dispatch(closeUpdateForm());
    dispatch(closeDeleteBox());
    dispatch(closeCategoryForm());
    dispatch(closeCategoryDeleteBox());
  };

  return (
    <Container>
      {type === "transaction" ? (
        <Transaction />
      ) : type === "updateTransaction" ? (
        <UpdateTransaction />
      ) : type === "deleteTransaction" ? (
        <DeleteTransaction />
      ) : type === "category" ? (
        <Category />
      ) : type === "deleteCategory" ? (
        <DeleteCategory />
      ) : null}
      <Close onClick={handleClose}>
        <img src="/images/icons/close.svg" alt="Close" />
      </Close>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  z-index: 4;
`;

const Close = styled.button`
  position: absolute;
  top: 60px;
  right: 60px;
  background: transparent;
`;

export default Popup;
