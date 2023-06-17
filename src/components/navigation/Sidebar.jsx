import React from "react";
import { styled } from "styled-components";

function Sidebar() {
  return <Container></Container>;
}

const Container = styled.div`
  height: 100vh;
  width: 270px;
  padding: 60px 0;
  position: fixed;
  overflow: hidden;
  background: #202020;
  border-right: 1px solid #2b2b2b;
  z-index: 3;
`;

export default Sidebar;
