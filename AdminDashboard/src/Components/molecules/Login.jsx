import {useState} from 'react'
import InputBox from '../atoms/InputBox'
import Button from '../atoms/Button';

const Login = ({handleLogin}) => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    

  return (
    <div>
      <InputBox className='username' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <InputBox className='password' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      <Button className='login-button' label='Login' onClick={() => handleLogin(username, password)} />
    </div>
  )
}

export default Login
