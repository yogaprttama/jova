import React, { useState }from 'react';
import Layout from '../layouts/LayoutAuth';
import Auth from '../components/Auth';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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
      <Auth submitText="Log in" onInputChange={handleChange} onSubmitClick={handleSubmit} />
    </Layout>
  );
}

export default Login;
