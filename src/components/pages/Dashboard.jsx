import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  selectExpenses,
  selectIncomes,
  selectTransactions,
} from "../../redux/features/transaction/transactionSlice";
import Balance from "../tabs/Balance";
import Transactions from "../tabs/Transactions";
import Statistics from "../tabs/Statistics";
import Categories from "../tabs/Categories";
import { selectCategories } from "../../redux/features/category/categorySlice";
import AddButtonCircle from "../buttons/AddButtonCircle";

function Dashboard() {
  const transactions = useSelector(selectTransactions);
  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncomes);
  const categories = useSelector(selectCategories);

  return (
    <Container>
      <Top>
        <Heading>Dashboard</Heading>
        <AddButtonCircle type="transaction" />
      </Top>
      <CountGrid>
        <Count>
          <h3>{transactions.length}</h3>
          <p>
            {transactions.length <= 1
              ? "Transaction Added"
              : "Transactions Added"}
          </p>
        </Count>
        <Count>
          <h3 className="expense">{expenses.length}</h3>
          <p>{expenses.length <= 1 ? "Expense Added" : "Expenses Added"}</p>
        </Count>
        <Count>
          <h3 className="income">{incomes.length}</h3>
          <p>{incomes.length <= 1 ? "Income Added" : "Incomes Added"}</p>
        </Count>
      </CountGrid>
      <TabGrid>
        <Balance expenses={expenses} incomes={incomes} />
        <Transactions transactions={transactions} />
        <Statistics />
        <Categories categories={categories} />
      </TabGrid>
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

const CountGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
`;

const Count = styled.div`
  padding: 18px 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #202020;
  border-radius: 18px;

  h3 {
    font-size: 28px;
    font-weight: 500;
    color: #f9f9f9;

    &.expense {
      color: #c33939;
    }

    &.income {
      color: #4f883b;
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #848484;
  }
`;

const TabGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export default Dashboard;
