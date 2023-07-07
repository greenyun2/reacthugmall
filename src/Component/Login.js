import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// const Form = styled.form`
//   width: 500px;
//   height: 500px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid blue;
//   id-input{

//   }
// `;

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user');
    setAuthenticate(true);
    navigate('/');
  };
  return (
    <Wrap>
    <Container className='login-area'>
    <Form className='login-form' onSubmit={(event) => loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
    </Wrap>
  )
}

export default Login