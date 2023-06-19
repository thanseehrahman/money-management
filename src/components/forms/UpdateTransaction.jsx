import React from "react";
import { styled } from "styled-components";

function UpdateTransaction() {
  const updateTransaction = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Top>
        <Heading>Update Transaction</Heading>
      </Top>
      <Form onSubmit={updateTransaction}></Form>
    </Container>
  );
}

const Container = styled.div`
  width: 540px;
  padding: 36px;
  background: #202020;
  border-radius: 18px;
`;

const Top = styled.div`
  padding-bottom: 18px;
  border-bottom: 2px solid #2b2b2b;
  margin-bottom: 28px;
`;

const Heading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: #f9f9f9;
`;

const Form = styled.form``;

export default UpdateTransaction;
