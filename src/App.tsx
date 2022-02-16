import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 100vh;
`;

const App = () => {
  return <Container>Hello world!</Container>;
};

export default App;
