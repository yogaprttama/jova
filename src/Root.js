import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';

const Content = styled.div`
  padding-top: 2.5rem;
`;

const Root = () => {
  const [session, setSession] = useState(null);

  return(
    <div className="App">
      <Navbar />
      <Content className="wrap">
        <AuthContext.Provider value={{ session, setSession }}>
          <Outlet />
        </AuthContext.Provider>
      </Content>
    </div>
  );
}

export default Root;
