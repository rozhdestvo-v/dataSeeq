import React from "react";
import sportmentsWide from "../assets/sportments1800.png";
import sportmentsTablet from "../assets/sportments1440-768.png";
import uiBlockOne from "../assets/UiBlockOne.png";
import "../styles/Hero.css";
import { HeroEllipseOne } from "../assets/HeroEllipseOne";
import { HeroEllipseTwo } from "../assets/HeroEllipseTwo";

function Hero({ onOpenDemo }) {
  return (
    <section id="experience" className="hero">
      <div className="hero-ellipse-one">
        <HeroEllipseOne />
      </div>
      <div className="hero-ellipse-two">
        <HeroEllipseTwo />
      </div>
      <div className="hero-background">
        <img
          src={sportmentsWide}
          alt="Sports background"
          className="hero-bg-image hero-bg-wide"
          loading="eager"
        />
        <img
          src={sportmentsTablet}
          alt="Sports background"
          className="hero-bg-image hero-bg-desktop"
          loading="eager"
        />
        <img
          src={uiBlockOne}
          alt="Mobile UI block"
          className="hero-bg-image hero-bg-mobile"
          loading="eager"
        />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            AI-сервис для <span className="hero-title-highlight">анализа</span>
            <br />
            спонсорских интеграций
          </h1>
          <p className="hero-description">
            Контролируйте каждый рубль, управляйте эффективностью рекламы с
            ювелирной точностью на основе реальных данных
          </p>
          <div className="hero-button-wrapper">
            <button
              className="hero-button"
              type="button"
              onClick={() => onOpenDemo && onOpenDemo()}
            >
              Бесплатный аудит
            </button>
            <p className="hero-accuracy">
              <span className="hero-accuracy-main">
                Точность данных — 99,8%
              </span>
              <br />
              <span className="hero-accuracy-sub">
                на основе работы 6 нейросетей
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
