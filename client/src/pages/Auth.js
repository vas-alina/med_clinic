import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const H2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
`;
const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgb(240 244 243);
  color: rgb(46 125 50);
  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(46 125 50);
  }
`;
export const Authorization = ({ className }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        login,
        password,
      });

      if (response.status === 200) {

        window.location.href = "/leads";
      }
    } catch (error) {
      setErrorMessage("Ошибка авторизации. Проверьте свои данные.");
      console.error("Ошибка авторизации", error);
    }
  };
  return (
    <div className={className}>
      <H2>Вход администратора</H2>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Введите логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit"><Link to='/leads'>Войти</Link></Button>
      </FormContainer>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
