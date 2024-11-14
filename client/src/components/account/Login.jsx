import {Box, TextField, Button, styled, Typography} from '@mui/material';
import { useState } from 'react';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0,0,0,0.6);
`
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > Button, & > p{
    margin-top: 20px;
    }

`

const LoginButton = styled(Button)`
    background: #FB641B;
    text-transform: none;
    color: #fff;
    height: 40px;
    border-radius:2px;

`
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 40px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2)

`

const Text = styled(Typography)`
    color: #878787;
    font-size: 16px;
`

const signupInitialValues =  {
    name: '',
    username: '',
    password: ''
}

 function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState('login')
    const [signup, setSignup] = useState(signupInitialValues)

    const toggler = () =>{
        account === 'login' ? toggleAccount('signup') : toggleAccount('login')
    }

    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name] : e.target.value})
    }
  return (
    
    <Component>
        <Box>
            <Image src={imageURL} alt="login" />
            {account === 'login' ?
                <Wrapper>
                <TextField variant="standard" label="Enter Username"/>
                <TextField variant="standard" label="Enter Password"/>
                <LoginButton variant='contained'>Login</LoginButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <SignupButton onClick={toggler}>Create an Account</SignupButton>
            </Wrapper>
            :
            <Wrapper>
                <TextField variant="standard" label="Enter Name" name='name' onChange={(e) => onInputChange(e)}/>
                <TextField variant="standard" label="Enter Username" name='username' onChange={(e) => onInputChange(e)}/>
                <TextField variant="standard" label="Enter Password" name='password' onChange={(e) => onInputChange(e)}/>
                <SignupButton>Signup</SignupButton>
                <Text style={{textAlign: 'center'}}>OR</Text>
                <LoginButton variant='contained' onClick={toggler}>Login</LoginButton>
            </Wrapper>}
        </Box>
    </Component>
  )
}

export default Login
