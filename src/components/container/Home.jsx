import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Sidebar from "../navigation/Sidebar";

function Home() {
  return (
    <Container>
      <Sidebar />
      <Layout>
        <Overlay />
        <Outlet />
      </Layout>
    </Container>
  );
}

const Container = styled.div``;

const Layout = styled.div`
  height: 100vh;
  width: calc(100% - 270px);
  padding: 90px 60px 60px;
  position: relative;
  left: 270px;
  overflow-x: hidden;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  z-index: 2;
`;

export default Home;
