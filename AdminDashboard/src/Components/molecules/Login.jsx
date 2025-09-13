import React from 'react';
import InputBox from '../atoms/InputBox';
import Button from '../atoms/Button';
import './Login.css'

const Login = ({ handleLogin }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
        <div className='login'>
      <div className='body'>
      <h1>Login </h1>
      <InputBox className='username' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <InputBox className='password' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <Button className='login-button' label='Login' onClick={() => handleLogin(username, password)} />
    </div>
    </div>
    </div>
  )
}

export default Login
