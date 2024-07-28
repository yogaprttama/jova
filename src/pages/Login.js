import React, { useContext, useState }from 'react';
import { AuthContext } from '../context/AuthContext';
import Layout from '../layouts/LayoutAuth';
import Auth from '../components/Auth';
import { supabase } from '../lib/supabaseClient';

const Login = () => {
  const { setSession } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword(form);

    setSession(data);

    setLoading(false);
  }

  const handleChange = (e) => {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  return(
    <Layout>
      <h1 className="page-title" itemprop="headline">Log in</h1>
      <Auth submitText="Log in" onInputChange={handleChange} onSubmitClick={handleSubmit} loading={loading} />
    </Layout>
  );
}

export default Login;
