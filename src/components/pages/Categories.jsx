import React from "react";
import { styled } from "styled-components";
import AddButtonCircle from "../buttons/AddButtonCircle";

function Categories() {
  return (
    <Container>
      <Top>
        <Heading>Categories</Heading>
        <AddButtonCircle type="category" />
      </Top>
    </Container>
  );
}

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #f9f9f9;
`;

export default Categories;
