import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const Content = styled.div`
  padding-top: 2.5rem;
`;

const Root = () => {
  return(
    <div className="App">
      <Navbar />
      <Content className="wrap">
        <Outlet />
      </Content>
    </div>
  );
}

export default Root;
