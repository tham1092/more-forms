import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormComponent = () => {
  const defaultData = {
    userName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [register, setRegister] = useState(defaultData);
  const [userNameError, setUserNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  const createUser = (e) => {
    e.preventDefault();
    console.log("Usuario Creado: ", register);
    setRegister(defaultData);
  };

  const handleOnChange = (e) => {
  
    if (e.target.name === "userName")
      if (e.target.value.length < 2) {
        setUserNameError("El campo debe tener al menos 2 caracteres.");
      }else {
        setUserNameError("")
      }
       if (e.target.name === "lastName")
        if (e.target.value.length < 2) {
          setLastNameError("El campo debe tener al menos 2 caracteres.");
        }else {
          setLastNameError("")
        }

        if (e.target.name === "email")
        if (e.target.value.length < 5) {
          setEmailError("El campo debe tener al menos 5 caracteres.");
        }else{
          setEmailError("")
        }

        if (e.target.name === "password" && e.target.value.length < 8){

          setPasswordError("El campo debe tener al menos 8 caracteres.");
          } else{
            setPasswordError("")
          }
      if (e.target.name === "confirmPassword") {
          if (e.target.value !== register.password) {
            setConfirmPasswordError("Las contraseñas deben coincidir.");
          } else{
            setConfirmPasswordError("")
          }

        }
        setRegister({ ...register, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="container">
      <h1>Registro de Usuario</h1>
      {userNameError && <div className="alert alert-danger">{userNameError}</div> }
      <Form onSubmit={createUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre completo"
            name="userName"
            value={register.userName}
            onChange={handleOnChange}
            />
        </Form.Group>
        {lastNameError && <div className="alert alert-danger">{lastNameError}</div>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese sus apellidos"
            name="lastName"
            value={register.lastName}
            onChange={handleOnChange}
          />
        </Form.Group>
        {emailError && <div className="alert alert-danger">{emailError}</div>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            name="email"
            value={register.email}
            onChange={handleOnChange}
          />
        </Form.Group>
        {passwordError && <div className="alert alert-danger">{passwordError}</div>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            value={register.password}
            onChange={handleOnChange}
          />
        </Form.Group>
        {confirmPasswordError && <div className="alert alert-danger">{confirmPasswordError}</div>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirme su Contraseña:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme su contraseña"
            name="confirmPassword"
            value={register.confirmPassword}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Registro
        </Button>
      </Form>
    </div>
  );

}
export default FormComponent;
