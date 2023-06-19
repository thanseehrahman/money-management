import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import {
  closeCategoryForm,
  selectCategoryCache,
  selectGroups,
  setCategoryCache,
} from "../../redux/features/category/categorySlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { openForm } from "../../redux/features/transaction/transactionSlice";

function Category() {
  const types = ["expense", "income"];
  const cache = useSelector(selectCategoryCache);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(cache.title);
  const [type, setType] = useState(cache.type === "" ? "expense" : cache.type);
  const [group, setGroup] = useState(cache.group);

  const [typeDropdown, setTypeDropdown] = useState(false);
  const [groupDropdown, setGroupDropdown] = useState(false);

  const check = title !== "" && group !== "";

  useEffect(() => {
    dispatch(
      setCategoryCache({
        title: title,
        type: type,
        group: group,
      })
    );
  }, [title, type, group]);

  const addCategory = async (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Please enter a title for the category!");
    } else if (group === "") {
      alert("Please select or create a group for the category!");
    } else {
      await addDoc(collection(db, "categories"), {
        title: title,
        type: type,
        group: group,
        time: new Date(),
      });

      setTitle("");
    }
  };

  return (
    <Container>
      <Top>
        <Heading>Add Category</Heading>
      </Top>
      <Form onSubmit={addCategory}>
        <Input>
          <h4>Title</h4>
          <Text active={title !== ""}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Category title"
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
                    setGroup("");
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
          <h4>Group</h4>
          <Select onClick={() => setGroupDropdown(!groupDropdown)}>
            <h4>{group === "" ? "Select Group" : group}</h4>
            <img src="/images/icons/down.svg" alt="Down" />
            <List active={groupDropdown}>
              {type === "expense"
                ? groups
                    .filter((g) => g.type === "expense")
                    .map((group, index) => (
                      <Item onClick={() => setGroup(group.value)} key={index}>
                        <h4>{group.value}</h4>
                      </Item>
                    ))
                : groups
                    .filter((g) => g.type === "income")
                    .map((group, index) => (
                      <Item onClick={() => setGroup(group.value)} key={index}>
                        <h4>{group.value}</h4>
                      </Item>
                    ))}
            </List>
          </Select>
        </Input>
        <Submit active={check} type="submit">
          Add Category
        </Submit>
        <Actions>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeCategoryForm());
            }}
            className="cancel"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(closeCategoryForm());
              dispatch(openForm());
            }}
          >
            Add Transaction +
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

const Select = styled.div`
  width: 100%;
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

export default Category;
