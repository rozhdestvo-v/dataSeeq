import React, { useState } from "react";
import logoImage from "../assets/LogoHederTitle.svg";
import burgerIcon from "../assets/burgerUi.png";
import loginButtonNormal from "../assets/loginButtonNormal.svg";
import loginButtonHover from "../assets/HoverLoginButton.png";
import "../styles/Header.css";
import { PhoneIcon } from "../assets/PhoneIcon";
import { BurgerIcon } from "../assets/BurgerIcon";

function Header({ onOpenDemo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+78002000600";
  };

  const handleNavClick = (e, elementId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMenuOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-menu-overlay")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-panel">
        <div className="header-container">
          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-button ${isMenuOpen ? "active" : ""}`}
            onClick={handleMenuClick}
            aria-label="Меню"
          >
            <BurgerIcon />
          </button>

          {/* Logo */}
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="DataSeeq"
          >
            <img
              src={logoImage}
              alt="DataSeeq"
              className="logo-image"
              loading="eager"
            />
          </a>

          {/* Navigation */}
          <nav className="navigation">
            <a
              href="#experience"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("experience");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Опыт
            </a>
            <a
              href="#how-it-works"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("how-it-works");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Как работает
            </a>
            <a
              href="#examples"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("examples");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Примеры
            </a>
            <a
              href="#analyses"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("analyses");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Разборы
            </a>
            <a
              href="#advantages"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("advantages");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Преимущества
            </a>
            <a
              href="#questions"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("questions");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Вопросы
            </a>
          </nav>

          {/* Contact & CTA */}
          <div className="header-right">
            <div className="contact-info">
              <div className="phone-number">8 800 2000 600</div>
              <div className="phone-description">
                Бесплатный звонок по России
              </div>
            </div>
            <div className="header-divider"></div>
            <div className="header-cta-buttons">
              <button
                type="button"
                className="cta-button"
                onClick={() => onOpenDemo()}
              >
                Запросить демо
              </button>
              <a href="#login" className="header-login-button">
                <img
                  src={loginButtonNormal}
                  alt="Войти"
                  className="header-login-img header-login-img-normal"
                />
                <img
                  src={loginButtonHover}
                  alt=""
                  className="header-login-img header-login-img-hover"
                  aria-hidden
                />
              </a>
            </div>
          </div>

          {/* Mobile Phone Icon */}
          <button
            className="mobile-phone-button"
            onClick={handlePhoneClick}
            aria-label="Позвонить"
          >
            <PhoneIcon alt="Позвонить" className="phone-icon" loading="eager" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleMenuOverlayClick}>
          <div
            className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mobile-navigation">
              <a
                href="#experience"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, "experience")}
              >
                Опыт
              </a>
              <a
                href="#how-it-works"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, "how-it-works")}
              >
                Как работает
              </a>
              <a
                href="#examples"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, "examples")}
              >
                Примеры
              </a>
              <a
                href="#analyses"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, "analyses")}
              >
                Разборы
              </a>
              <a
                href="#advantages"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, "advantages")}
              >
                Преимущества
              </a>
              <a
                href="#questions"
                className="mobile-nav-link"
                onClick={(e) => handleNavClick(e, "questions")}
              >
                Вопросы
              </a>
              <a
                href="#login"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Войти
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
