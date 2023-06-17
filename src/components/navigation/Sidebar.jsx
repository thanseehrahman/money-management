import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { selectLinks } from "../../redux/features/navigation/navigationSlice";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const links = useSelector(selectLinks);
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container>
      <Top>
        {links.map((link, index) => (
          <Item active={link.path === path} to={link.path} key={index}>
            <img
              src={link.path === path ? link.img.active : link.img.img}
              alt={link.title}
            />
            <h6>{link.title}</h6>
          </Item>
        ))}
      </Top>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 270px;
  padding: 60px 14px;
  position: fixed;
  overflow: hidden;
  background: #202020;
  border-right: 1px solid #2b2b2b;
  z-index: 3;
`;

const Top = styled.div``;

const Item = styled(Link)`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.05)" : null)};
  border-radius: 6px;

  img {
    width: 20px;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => (props.active ? null : "#848484")};
  }
`;

export default Sidebar;
