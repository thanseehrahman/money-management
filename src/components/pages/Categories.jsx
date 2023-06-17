import React from "react";
import { styled } from "styled-components";

function Categories() {
  return (
    <Container>
      <Top>
        <Heading>Categories</Heading>
      </Top>
    </Container>
  );
}

const Container = styled.div``;

const Top = styled.div`
  margin-bottom: 48px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #f9f9f9;
`;

export default Categories;
