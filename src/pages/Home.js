import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: 24rem;
`;

const Home = () => {
  return(
    <Main>
      <h1>Home Page</h1>
      <p>This is your first page. Edit or delete it, then start writing!</p>
    </Main>
  );
}

export default Home;
