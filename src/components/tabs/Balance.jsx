import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Balance({ expenses, incomes }) {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    const sumExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const sumIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);

    setExpense(sumExpense);
    setIncome(sumIncome);
  }, [expenses, incomes]);

  return (
    <Container>
      <Heading>
        <Link to="/transactions">Balance</Link>
      </Heading>
      <Box></Box>
    </Container>
  );
}

const Container = styled.div`
  min-height: 300px;
  padding: 36px;
  background: #202020;
  border-radius: 18px;
`;

const Heading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: #f9f9f9;
  margin-bottom: 18px;
`;

const Box = styled.div`
  height: calc(100% - 36px - 18px);
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #2b2b2b;
  border: 2px solid #4b4b4b;
  border-radius: 8px;
`;

export default Balance;
