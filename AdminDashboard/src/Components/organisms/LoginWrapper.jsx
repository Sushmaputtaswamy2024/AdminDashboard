import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../molecules/Login';
const LoginWrapper = ({ setLoginStatus }) => {
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    const adminCredentials = {
      username: 'admin',
      password: 'admin123',
    };

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      setLoginStatus(true);
      navigate('/cards'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return <Login handleLogin={handleLogin} />;
};
export default LoginWrapper;