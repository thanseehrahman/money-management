import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { openForm } from "../../redux/features/transaction/transactionSlice";
import { openCategoryForm } from "../../redux/features/category/categorySlice";

function AddButton({ type }) {
  const check = type === "transaction";
  const dispatch = useDispatch();

  return (
    <Container
      onClick={() => dispatch(check ? openForm() : openCategoryForm())}
      type={check}
    >
      <img
        src={`/images/icons/plus${check ? "" : "-dark"}.svg`}
        alt={`Add ${type}`}
      />
    </Container>
  );
}

const Container = styled.button`
  width: 100%;
  padding: 8px 0px;
  display: grid;
  place-items: center;
  background: ${(props) => (props.type ? "#4cbE5E" : "#bedd42")};
  border-radius: 8px;
`;

export default AddButton;
