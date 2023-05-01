import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';


export default function Contact() {

  const [alert, setAlert] = useState("");

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  // function checkEmail() {
  //   console.log(email)

  // }

  function checkInput(event) {
    if (event.target.name === "email") {
      const pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      if (!email.match(pattern)) {
        console.log("invalid email")
        setAlert("Invalid email!")
      } else {
        console.log("valid")
        setAlert("")
      }
    } else if (event.target.name === "name") {
      if (name === '') {
        setAlert("Name is Required")
      } else {
        setAlert("")
      }
    } else {
      if (message === '') {
        setAlert("Message is Required")
      } else {
        setAlert("")
      }
    }
  }

  function onChange(event) {
    if (event.target.name === "email") {
      setEmail(event.target.value)
    } else if (event.target.name === "name") {
      setName(event.target.value)
    } else {
      setMessage(event.target.value)
    }
  }

  // function onEmailChange (event) {

  //   console.log(email)
  // }

  // function checkName() {

  // }

  // function onNameChange (event) {
  //   setName(event.target.value)
  // }

  // const [formInput, setFormInput]= useState({
  //   email: "",
  //   name: "",
  //   message: ""
  // })

  return (
    <Container className="my-3">
      <h2>{alert}</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={onChange}
            onBlur={checkInput}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name"
            name="name"
            onChange={onChange}
            onBlur={checkInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Send me a messaage</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" 
            onChange={onChange}
            onBlur={checkInput}
          />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

  );
}
