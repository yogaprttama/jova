import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from './Login';

const NewJobs = () => {
  const { session, setSession } = useContext(AuthContext);

  return(
    <div>
      { session ? <button type="button" onClick={() => setSession(null)}>Log out</button> : <Login /> }
    </div>
  );
}

export default NewJobs;
