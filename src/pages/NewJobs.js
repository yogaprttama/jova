import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import Login from './Login';

const NewJobs = () => {
  const { session, setSession } = useContext(AuthContext);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    setSession(null);
  }

  return(
    <>
      { session ? <button type="button" onClick={handleLogout}>Log out</button> : <Login /> }
    </>
  );
}

export default NewJobs;
