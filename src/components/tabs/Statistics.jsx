import React from "react";
import { styled } from "styled-components";

function Statistics() {
  return (
    <Container>
      <Heading>Statistics</Heading>
    </Container>
  );
}

const Container = styled.div`
  min-height: 300px;
  padding: 36px;
  grid-area: 2 / 1 / auto / 3;
  background: #202020;
  border-radius: 18px;
`;

const Heading = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: #f9f9f9;
  margin-bottom: 18px;
`;

export default Statistics;
