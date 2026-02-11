import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import rubImage from "../assets/rubImage.png";
import iconOne from "../assets/iconOnes.png";
import iconTwo from "../assets/iconTwo.png";
import iconThree from "../assets/IconThree.png";
import iconFour from "../assets/IconFour.png";
import "../styles/Advantages.css";
import { AdvantagesEllipse } from "../assets/AdvantagesEllipse";

function Advantages({ onOpenDemo }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const sectionRef = useRef(null);
  const activeIndexRef = useRef(0);

  const advantages = [
    {
      title: "Оптимизация бюджета",
      description:
        "Вы видите, какие интеграции и каналы работают лучше всего. Оптимизируйте их, усиливайте эффективные каналы, сокращайте неэффективные",
      icon: rubImage,
    },
    {
      title: "Анализ конкурентов",
      description:
        "Dataseeq проанализирует Ваших конкурентов по видеоисточникам и стримам, вычислив их экранное время, качество экспозиции и медиавлияние с покадровой точностью, а затем сопоставит метрики брендов в единых дашбордах и отчетах для бенчмаркинга и поиска возможностей роста",
      icon: iconOne,
    },
    {
      title: "Контроль подрядчиков",
      description:
        "Dataseeq позволит контролировать подрядчиков через независимую покадровую верификацию «proof-of-play», аудиты качества экспозиций и прозрачные логи показов с медиа-ценностью, устраняя спорные отчёты и снижая риск конфликта интересов при самоотчётности поставщиков услуг. Система обеспечит контроль как в реальном времени, так и пост-кампейн сертификацию, опираясь на отраслевые практики аудита и стандарты, чтобы закрепить единый источник истины для всех сторон сделки",
      icon: iconTwo,
    },
    {
      title: "Доказательная база",
      description:
        "Dataseeq докажет и покажет реальные цены на маркетинг через прозрачную, признанную в индустрии валюацию: покадровая видимость → качественно взвешенная экспозиция → эквивалент медиа-стоимости по реальным ставкам → вклад в бренд и бизнес-результаты, с доказательной базой из таймкодов и кадров",
      icon: iconThree,
    },
    {
      title: "Мониторинг рынка и трендов",
      description:
        "Dataseeq позволит мониторить рынок и тренды через непрерывный сбор и нормализацию данных об экспозиции брендов в трансляциях/стримах, построение по лигам и площадкам, а также выявление динамики и прогнозов по категориям и конкурентам в интерактивных дашбордах",
      icon: iconFour,
    },
  ];

  const activeAdvantage = advantages[activeIndex];

  useEffect(() => {
    // Инициализируем массив refs
    itemRefs.current = itemRefs.current.slice(0, advantages.length);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition + viewportHeight >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        // Проверяем все элементы и находим тот, который должен быть активным
        // Приоритет отдаем элементу, который находится в области активации (нижние 70% экрана)
        let activeIndexFound = activeIndexRef.current;

        // Сначала проверяем элементы снизу вверх для последовательности
        for (let i = advantages.length - 1; i >= 0; i--) {
          const ref = itemRefs.current[i];
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const itemTop = rect.top;
            const itemBottom = rect.bottom;
            const itemCenter = rect.top + rect.height / 2;

            // Активируем элемент, когда его центр находится в области от 10% до 70% экрана
            // Это гарантирует раннюю активацию, когда элемент еще внизу
            if (
              itemCenter >= viewportHeight * 0.1 &&
              itemCenter <= viewportHeight * 0.7
            ) {
              activeIndexFound = i;
              break;
            }
          }
        }

        // Если не нашли элемент в основной области, проверяем альтернативную логику
        if (activeIndexFound === activeIndex) {
          for (let i = advantages.length - 1; i >= 0; i--) {
            const ref = itemRefs.current[i];
            if (ref) {
              const rect = ref.getBoundingClientRect();
              const itemTop = rect.top;
              const itemBottom = rect.bottom;

              // Если элемент виден и находится в нижних 80% экрана
              if (
                itemTop >= 0 &&
                itemTop <= viewportHeight * 0.8 &&
                itemBottom > viewportHeight * 0.1
              ) {
                activeIndexFound = i;
                break;
              }
            }
          }
        }

        // Устанавливаем активный индекс
        if (activeIndexFound !== activeIndexRef.current) {
          activeIndexRef.current = activeIndexFound;
          setActiveIndex(activeIndexFound);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [advantages.length]);

  return (
    <section className="advantages" ref={sectionRef}>
      <div className="advantages-bg" />
      <div className="advantages-circle">
        <AdvantagesEllipse />
      </div>
      <div className="advantages-container">
        <h2 className="advantages-title">
          <span className="advantages-title-highlight">Dataseeq</span>
          <span className="advantages-title-regular">
            {" "}
            — не только выявление потерь,
            <br />
            это инструмент для роста и контроля
          </span>
        </h2>

        <div className="advantages-icon-text">
          <motion.div
            className="advantages-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={activeAdvantage.icon}
                alt={activeAdvantage.title}
                className="advantage-icon"
                loading="eager"
                initial={{ opacity: 0, scale: 0.35 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
              />
            </AnimatePresence>
          </motion.div>
          <div className="advantages-content">
            <div className="advantages-list">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) {
                      itemRefs.current[index] = el;
                    }
                  }}
                  className={`advantage-item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="advantage-content">
                    <span className="advantage-number">{index + 1}.</span>
                    <span className="advantage-text">{advantage.title}</span>
                  </div>
                  {activeIndex === index && advantage.description && (
                    <p className="advantage-description">
                      {advantage.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="advantages-cta">
          <button
            type="button"
            className="advantages-button"
            onClick={onOpenDemo}
          >
            Увидеть все возможности
          </button>
          <p className="advantages-cta-text">
            Пройдите бесплатный аудит и<br />
            посмотрите на реальные данные
          </p>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
