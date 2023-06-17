import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  selectExpenses,
  selectIncomes,
  selectTransactions,
} from "../../redux/features/transaction/transactionSlice";

function Dashboard() {
  const transactions = useSelector(selectTransactions);
  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncomes);

  const countArray = (array) => {
    let count = array.length;
    return count;
  };

  return (
    <Container>
      <Top>
        <Heading>Dashboard</Heading>
      </Top>
      <CountGrid>
        <Count>
          <h3>{countArray(transactions)}</h3>
          <p>
            {transactions.length <= 1
              ? "Transaction Added"
              : "Transactions Added"}
          </p>
        </Count>
        <Count>
          <h3>{countArray(expenses)}</h3>
          <p>{expenses.length <= 1 ? "Expense Added" : "Expenses Added"}</p>
        </Count>
        <Count>
          <h3>{countArray(incomes)}</h3>
          <p>{incomes.length <= 1 ? "Income Added" : "Incomes Added"}</p>
        </Count>
      </CountGrid>
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

const CountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

const Count = styled.div`
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #202020;

  h3 {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default Dashboard;
