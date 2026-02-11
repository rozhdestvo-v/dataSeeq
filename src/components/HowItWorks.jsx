import React, { useEffect, useRef, useState } from "react";
import "../styles/HowItWorks.css";
import {
  HowItWorksEllipseOne,
  HowItWorksEllipseTwo,
} from "../assets/HowItWorksEllipse";

function HowItWorks() {
  const steps = [
    {
      number: 1,
      description:
        "Платформа смотрит трансляции, стримы и клипы где могут мелькать логотипы и упоминания брендов партнеров",
    },
    {
      number: 2,
      description:
        "Узнаёт бренд в кадре и тексте. Компьютерное зрение ловит логотипы и их размер на экране, а анализ текста фиксирует упоминания и контекст — всё автоматически и без ручной разметки",
    },
    {
      number: 3,
      description:
        "Переводит видимость в деньги. Секунды в кадре, доля экрана, охват и вовлеченность конвертируются в единую «ценность экспозиции» (EMV) и вклад в ROI, чтобы сравнивать каналы между собой",
    },
    {
      number: 4,
      description:
        "Показывает всё на дашборде. В реальном времени видно, какой партнер, турнир, пост или стрим дал больше пользы; отчеты собираются в пару кликов",
    },
    {
      number: 5,
      description:
        "Помогает принимать решения. Клубы и турниры доказывают партнерам ценность, бренды понимают, что продлевать и куда переносить бюджет, агентствам проще отчитываться перед клиентами",
    },
  ];

  const stepRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        let closest = -1;
        let minDistance = Infinity;
        stepRefs.current.forEach((el, i) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const dist = Math.abs(elCenter - viewportCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closest = i;
          }
        });
        if (closest !== activeIndex) setActiveIndex(closest);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-circle-1">
        <HowItWorksEllipseOne />
      </div>
      <div className="how-it-works-circle-2">
        <HowItWorksEllipseTwo />
      </div>
      <div className="how-it-works-bg"/>
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">Как это работает?</h2>
        <p className="how-it-works-subtitle">
          Для расчёта охвата и стоимости мы анализируем каждый кадр с помощью
          продвинутых алгоритмов компьютерного зрения
        </p>
        <div className="steps-list">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Desktop version */}
              <div
                className="step-wrapper"
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                data-step-index={index}
              >
                <div
                  className={`step-label ${index === activeIndex ? "active" : ""}`}
                >
                  Шаг {step.number}
                </div>
                <div className="step-panel">
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              {/* Mobile version */}
              <div className="step-card">
                <button className="step-button">Шаг {step.number}</button>
                <div className="step-panel">
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
