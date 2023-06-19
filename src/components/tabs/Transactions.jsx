import React from "react";
import { styled } from "styled-components";
import AddButton from "../buttons/AddButton";
import { Link } from "react-router-dom";

function Transactions({ transactions }) {
  return (
    <Container>
      <Heading>
        <Link to="/transactions">Transactions</Link>
      </Heading>
      <AddButton type="transaction" />
      <List>
        {transactions.slice(0, 3).map((transaction, index) => (
          <Item type={transaction.type} key={index}>
            <h4>{transaction.title}</h4>
            <h4 className="amount">
              {transaction.type === "expense" ? "-" : "+"}
              {transaction.amount}
            </h4>
          </Item>
        ))}
      </List>
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

const List = styled.ul`
  margin-top: 18px;
`;

const Item = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #2b2b2b;
  margin-bottom: 8px;

  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #848484;

    &.amount {
      color: ${(props) => (props.type === "expense" ? "#c33939" : "#4f883b")};
    }
  }
`;

export default Transactions;
