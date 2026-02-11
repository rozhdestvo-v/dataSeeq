import React from "react";
import mainIcon from "../assets/mainIcon.svg";
import "../styles/Footer.css";
import { TgIcon } from "../assets/TgIcon";
import { VkIcon } from "../assets/VkIcon";
import { HabrIcon } from "../assets/HabrIcon";
import { Divider } from "@heroui/react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={mainIcon} alt="DataSeeq" className="footer-logo-icon" />
          <span className="footer-logo-text">dataseeq</span>
        </div>

        <nav className="footer-navigation">
          <a href="#main" className="footer-link">
            На главную
          </a>
          <a href="#experience" className="footer-link">
            Опыт
          </a>
          <a
            href="#how-it-works"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("how-it-works");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Как работает
          </a>
          <a
            href="#examples"
            className="footer-link"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("examples");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Примеры
          </a>
          <a href="#advantages" className="footer-link">
            Преимущества
          </a>
          <a href="#analyses" className="footer-link">
            Разборы
          </a>
          <a href="#questions" className="footer-link">
            Вопросы
          </a>
          <a href="#contact" className="footer-link">
            Написать нам
          </a>
        </nav>
        <div className="footer-divider"/>
        <div className="footer-bottom">
          <p className="footer-copyright">Все права защищены 2025 ©</p>
          <div className="footer-social">
            <a
              href="https://habr.com/ru/companies/dataseeq/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link social-link-habr"
              aria-label="Habr"
            >
              <HabrIcon />
            </a>
            <a
              href="https://vk.com/dataseeq"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="VK"
            >
              <VkIcon />
            </a>
            <a
              href="https://t.me/dataseeq"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Telegram"
            >
              <TgIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
