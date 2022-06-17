
import { useState } from 'react';
import { Button, Checkbox, Input } from "../Generic";
import { CheckboxDiv, Container, Title } from "./style";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
const { REACT_APP_BASE_URL: url } = process.env;

const SiginIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { mutate } = useMutation(() => fetch(`${url}/public/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': "Application/json",
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => res.json()))

  const onSubmit = () => {
    setPassword('')
    if (email.length && password.length) {
      mutate(
        {},
        {
          onSuccess: res => {
            if (res?.authenticationToken) {
              localStorage.setItem('token', res?.authenticationToken)
              navigate('/home');
            } else {
              setError('Password yoki emaildq xatolik');
            }
          },
          onError: err => { }
        }
      )
    } else setError(`Email yoki password bo'sh bolmasligi kerak`)
  }


  return (
    <Container>
      <Title>Sign in</Title>
      <Input
        value={email}
        onChange={({ target: { value } }) => {
          setEmail(value)
          setError('')
        }}
        mt={44} placeholder="Ali Tufa..."
      />
      <Input
        value={password}
        onChange={({ target: { value } }) => {
          setError('')
          setPassword(value)
        }}
        mt={44} placeholder="Password"
      />
      {error?.length ? <Title.Error>{error} </Title.Error> : null}

      <CheckboxDiv>
        <Checkbox  >Remember me</Checkbox>
        <Title.Link>Forgot</Title.Link>
      </CheckboxDiv>
      <Button
        mt={32}
        type='primary'
        onClick={onSubmit}
      >
        Login
      </Button>
    </Container>
  );
}
export default SiginIn;