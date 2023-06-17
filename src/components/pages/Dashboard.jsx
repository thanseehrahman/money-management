import React from "react";
import { styled } from "styled-components";

function Dashboard() {
  return (
    <Container>
      <Top>
        <Heading>Dashboard</Heading>
      </Top>
    </Container>
  );
}

const Container = styled.div``;

const Top = styled.div``;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #f9f9f9;
`;

export default Dashboard;
