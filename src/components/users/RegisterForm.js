import React, { useState } from 'react';
import styled from 'styled-components';

const FormD = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 0 2rem;

  input {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }

  label {
    font-size: 1rem;
    color: #282e74;
    padding: 10px;
  }
`;
const FormGrp = styled.div`
  margin: 1.2rem 0;
`;

const Button = styled.div`
  display: block;
  width: 100%;
  display: inline-block;

  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  background: #282e74;
  color: #fff;
`;

const RegisterForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
  });

  const { firstName, lastName, userName, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setUser({
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
    });
  };

  return (
    <FormD>
      <form onSubmit={onSubmit}>
        <h1>Add Admin</h1>
        <label htmlFor='firstName'>First Name</label>
        <FormGrp>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={onChange}
          />
        </FormGrp>

        <label htmlFor='Last Name'>Last Name</label>
        <FormGrp>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={onChange}
          />
        </FormGrp>
        <label htmlFor='User Name'>User Name</label>
        <FormGrp>
          <input
            type='text'
            placeholder='User Name'
            name='userName'
            value={userName}
            onChange={onChange}
          />
        </FormGrp>

        <label htmlFor='password'>Password</label>
        <FormGrp>
          <input
            type='text'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </FormGrp>

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </FormD>
  );
};

export default RegisterForm;
