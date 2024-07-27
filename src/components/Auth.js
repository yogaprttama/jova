import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 1.5rem;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem 0.75rem;
  width: 100%;
`;

const InputPassword = styled.input`
  display: block;
  padding: 0.5rem 3.5rem 0.5rem 0.75rem;
  width: 100%;
`;

const Toggle = styled.button`
  color: rgb(22, 119, 255);
  font-size: 0.875rem;
  line-height: 1.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.75rem;
`;

const ButtonSubmit = styled.button`
  display: block;
  padding: 0.625rem 0.875rem;
  background-color: rgb(37, 99, 235);
  color: rgb(255, 255, 255);
  width: 100%;
`;

const Auth = (props) => {
  const [toggle, setToggle] = useState(false);

  const onToggleClick = () => {
    setToggle(!toggle);
  }

  return(
    <Form onSubmit={props.onSubmitClick}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" className="form-control" onChange={props.onInputChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <InputPassword type={ toggle ? "text" : "password" } name="password" id="password" className="form-control" onChange={props.onInputChange} required />
          <Toggle type="button" onClick={onToggleClick}>{ toggle ? "Hide" : "Show" }</Toggle>
        </div>
      </div>
      <ButtonSubmit type="submit" className="btn">{props.submitText}</ButtonSubmit>
    </Form>
  );
}

export default Auth;
