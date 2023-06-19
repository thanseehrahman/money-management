import React from "react";
import { styled } from "styled-components";
import AddButton from "../buttons/AddButton";
import { Link } from "react-router-dom";

function Categories({ categories }) {
  return (
    <Container>
      <Heading>
        <Link to="/categories">Categories</Link>
      </Heading>
      <AddButton type="category" />
      <Count>
        <h3>{categories.length}</h3>
        <p>{categories.length <= 1 ? "Category Added" : "Categories Added"}</p>
      </Count>
      <List>
        {categories.slice(0, 8).map((category, index) => (
          <Item to={"/category/" + category.id} key={index}>
            <h4>{category.title}</h4>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding: 36px;
  grid-row: 1 / 3;
  background: #202020;
  border-radius: 18px;
`;

const Heading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: #f9f9f9;
  margin-bottom: 18px;
`;

const Count = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;

  h3 {
    font-size: 28px;
    font-weight: 500;
    color: #f9f9f9;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #848484;
  }
`;

const List = styled.div``;

const Item = styled(Link)`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #2b2b2b;

  h4 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export default Categories;
