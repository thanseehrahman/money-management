import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  closeForm,
  selectCache,
  setCache,
} from "../../redux/features/transaction/transactionSlice";
import {
  openCategoryForm,
  selectExpenseCategories,
  selectIncomeCategories,
} from "../../redux/features/category/categorySlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

function Transaction() {
  const types = ["expense", "income"];
  const cache = useSelector(selectCache);
  const expenses = useSelector(selectExpenseCategories);
  const incomes = useSelector(selectIncomeCategories);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(cache.title);
  const [amount, setAmount] = useState(cache.amount);
  const [date, setDate] = useState(cache.date === "" ? new Date() : cache.date);
  const [type, setType] = useState(cache.type === "" ? "expense" : cache.type);
  const [category, setCategory] = useState(cache.category);
  const [categoryId, setCategoryId] = useState(cache.categoryId);

  const [typeDropdown, setTypeDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const check = title !== "" && amount !== "" && category !== "";

  useEffect(() => {
    dispatch(
      setCache({
        title: title,
        amount: amount,
        date: date,
        type: type,
        category: category,
        categoryId: categoryId,
      })
    );
  }, [title, amount, date, type, category, categoryId]);

  const addTransaction = async (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Please enter a title for the transaction!");
    } else if (amount === "") {
      alert("Please enter the transaction amount!");
    } else if (category === "") {
      alert("Please select or create a category for the transaction!");
    } else {
      await addDoc(collection(db, "transactions"), {
        title: title,
        amount: parseFloat(amount),
        date: date,
        type: type,
        category: category,
        categoryId: categoryId,
        time: new Date(),
      });

      setTitle("");
      setAmount("");
    }
  };

  const handleAmount = (e) => {
    let keyCode = e.keyCode || e.which;
    let keyValue = String.fromCharCode(keyCode);
    let regex = /[0-9]|\./;

    if (!regex.test(keyValue)) {
      e.preventDefault();
    }
  };

  return (
    <Container>
      <Top>
        <Heading>Add Transaction</Heading>
      </Top>
      <Form onSubmit={addTransaction}>
        <Input>
          <h4>Title</h4>
          <Text active={title !== ""}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Transaction title"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setTitle("");
              }}
            >
              Clear
            </button>
          </Text>
        </Input>
        <NumberArea>
          <Input>
            <h4>Amount</h4>
            <Text active={amount !== ""}>
              <input
                onChange={(e) => setAmount(e.target.value)}
                onKeyPress={handleAmount}
                value={amount}
                type="text"
                placeholder="0000"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAmount("");
                }}
              >
                Clear
              </button>
            </Text>
          </Input>
          <Input>
            <h4>Date</h4>
            <Text>
              <input type="text" />
            </Text>
          </Input>
        </NumberArea>
        <SelectArea>
          <Input>
            <h4>Type</h4>
            <Select onClick={() => setTypeDropdown(!typeDropdown)}>
              <h4>{type}</h4>
              <img src="/images/icons/down.svg" alt="Down" />
              <List active={typeDropdown}>
                {types.map((type, index) => (
                  <Item
                    onClick={() => {
                      setType(type);
                      setCategory("");
                      setCategoryId("");
                    }}
                    key={index}
                  >
                    <h4>{type}</h4>
                  </Item>
                ))}
              </List>
            </Select>
          </Input>
          <Input>
            <h4>Category</h4>
            <Select onClick={() => setCategoryDropdown(!categoryDropdown)}>
              <h4>{category === "" ? "Select Category" : category}</h4>
              <img src="/images/icons/down.svg" alt="Down" />
              <List active={categoryDropdown}>
                {type === "expense"
                  ? expenses.map((category, index) => (
                      <Item
                        onClick={() => {
                          setCategory(category.title);
                          setCategoryId(category.id);
                        }}
                        key={index}
                      >
                        <h4>{category.title}</h4>
                      </Item>
                    ))
                  : incomes.map((category, index) => (
                      <Item
                        onClick={() => {
                          setCategory(category.title);
                          setCategoryId(category.id);
                        }}
                        key={index}
                      >
                        <h4>{category.title}</h4>
                      </Item>
                    ))}
                <Item
                  onClick={() => {
                    dispatch(closeForm());
                    dispatch(openCategoryForm());
                  }}
                >
                  <h4>Add Category +</h4>
                </Item>
              </List>
            </Select>
          </Input>
        </SelectArea>
        <Submit active={check} type="submit">
          Add Transaction
        </Submit>
        <Actions>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeForm());
            }}
            className="cancel"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeForm());
              dispatch(openCategoryForm());
            }}
          >
            Add Category +
          </button>
        </Actions>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Input = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
  }
`;

const Text = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 6px 12px;
    background: #1a1a1a;
    border: 2px solid #2b2b2b;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
  }

  button {
    padding: 2px 12px;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    display: ${(props) => (props.active ? "block" : "none")};
    background: #c33939;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #d4d4d4;
    cursor: pointer;
  }
`;

const NumberArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const SelectArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const Select = styled.div`
  padding: 6px 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a1a1a;
  border: 2px solid #2b2b2b;
  border-radius: 6px;

  h4 {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
    color: #848484;
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  width: calc(100% + 4px);
  padding: 6px 12px;
  position: absolute;
  top: 100%;
  left: -2px;
  display: ${(props) => (props.active ? "block" : "none")};
  background: #1a1a1a;
  border: 2px solid #2b2b2b;
  border-radius: 6px;
  z-index: 5;
`;

const Item = styled.li`
  padding: 6px 0;
  border-bottom: 2px solid #2b2b2b;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  h4 {
    color: #d4d4d4;
  }
`;

const Submit = styled.button`
  width: 100%;
  padding: 8px 0;
  background: ${(props) => (props.active ? "#4c7dfc" : "#2b2b2b")};
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  color: #f9f9f9;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;

  button {
    padding: 8px 0;
    background: #2b2b2b;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
    color: #f9f9f9;

    &.cancel {
      border: 2px solid #4b4b4b;
    }
  }
`;

export default Transaction;
