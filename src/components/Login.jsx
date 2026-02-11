import React, { useState } from "react";
import logoImage from "../assets/LogoHederTitle.svg";
import loginImage from "../assets/loginImage.png";
import "../styles/Login.css";
import { Button, Input } from "@heroui/react";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: auth logic
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <a
          href="#/"
          className="login-logo"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = "";
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoImage}
            alt="DataSeeq"
            className="login-logo-image"
            loading="eager"
          />
        </a>
        <div className="login-container">
          <h1 className="login-title">Добро пожаловать</h1>
          <p className="login-subtitle">Войдите или зарегистрируйтесь</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Логин"
              value={login}
              onValueChange={setLogin}
              variant="bordered"
              size="sm"
              required
              classNames={{
                input: "text-white placeholder:text-gray-400",
                inputWrapper:
                  "bg-[rgba(120,120,130,0.3)] border-[rgba(120,120,130,0.2)] hover:border-[rgba(120,120,130,0.4)] rounded-lg min-h-[52px]",
                innerWrapper: "!justify-start",
              }}
            />
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onValueChange={setPassword}
              variant="bordered"
              size="sm"
              required
              classNames={{
                input: "text-white placeholder:text-gray-400",
                inputWrapper:
                  "bg-[rgba(120,120,130,0.3)] border-[rgba(120,120,130,0.2)] hover:border-[rgba(120,120,130,0.4)] rounded-lg min-h-[52px]",
                innerWrapper: "!justify-start",
              }}
            />
            <button type="submit" className="login-submit">
              Войти
            </button>
            <a href="#recover" className="login-forgot">
              Забыли пароль? Перейдите к восстановлению пароля
            </a>
          </form>
        </div>
        <p className="login-footer">
          Регистрируясь, Вы соглашаетесь с
          <br />
          <a
            href="#"
            className="login-link"
            onClick={(e) => e.preventDefault()}
          >
            правилами
          </a>{" "}
          и{" "}
          <a href="#" onClick={(e) => e.preventDefault()}>
            политикой сайта
          </a>
        </p>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="" className="login-image" />
      </div>
    </div>
  );
}

export default Login;
