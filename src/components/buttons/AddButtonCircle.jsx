import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { openForm } from "../../redux/features/transaction/transactionSlice";
import { openCategoryForm } from "../../redux/features/category/categorySlice";

function AddButtonCircle({ type }) {
  const check = type === "transaction";
  const dispatch = useDispatch();

  return (
    <Container
      type={check}
      onClick={() => dispatch(check ? openForm() : openCategoryForm())}
    >
      <img
        src={`/images/icons/plus-large${check ? "" : "-dark"}.svg`}
        alt={`Add ${type}`}
      />
    </Container>
  );
}

const Container = styled.button`
  height: 60px;
  width: 60px;
  display: grid;
  place-items: center;
  background: ${(props) => (props.type ? "#4cbE5E" : "#bedd42")};
  border-radius: 50%;
`;

export default AddButtonCircle;
