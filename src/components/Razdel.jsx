import React from "react";
import "../styles/Razdel.css";
import { PhoneImage } from "../assets/PhoneImage";

function Razdel() {
  return (
    <section className="razdel">
      <div className="razdel-bg" />
      <div className="razdel-desktop">
        <div className="razdel-desktop-inner">
          <div className="razdel-left">
            <h2 className="razdel-title">
              Основная причина —<br />
              устаревшая <span className="razdel-title-gradient">ручная</span>
              <br />
              <span className="razdel-title-gradient">аналитика</span>
            </h2>
            <div className="razdel-block">
              <h3 className="razdel-subtitle">Неактуальная информация</h3>
              <p className="razdel-text">
                Ручные отчёты занимают до 2 недель, и к моменту их получения
                маркетинговая ситуация уже может измениться. Вместо того чтобы
                быстро реагировать на результаты, вы тратите время на сбор и
                обработку данных.
              </p>
            </div>
            <div className="razdel-block">
              <h3 className="razdel-subtitle">Человеческий фактор</h3>
              <p className="razdel-text">
                50% ошибок в отчётах вызваны человеческим фактором — пропущенные
                показания, неправильная интерпретация данных.
              </p>
            </div>
          </div>
          <div className="razdel-right">
            <PhoneImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Razdel;
