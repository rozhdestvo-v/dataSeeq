import React from "react";
import panelOne from "../assets/panelOne.png";
import panelTwo from "../assets/PanelTwo.png";
import "../styles/BudgetLoss.css";

function BudgetLoss() {
  return (
    <section className="budget-loss">
      <div className="budget-loss-background" />
      <div className="budget-loss-container">
        <h2 className="budget-loss-title">
          Теряете до 30% бюджета. Знаете почему?
        </h2>

        <div className="budget-loss-panels">
          <div className="budget-panel">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <h3 className="budget-panel-headline">&gt;2</h3>
              <h4 className="budget-panel-subtitle">
                миллиардов <br /> рублей
              </h4>
            </div>
            <p className="budget-panel-text">
              Ежегодно российские компании теряют более 2 млрд рублей только
              из-за неточной аналитики и устаревших методов отчётности
            </p>
          </div>
          <div className="budget-panel">
            <h3 className="budget-panel-headline">-30%</h3>
            <p className="budget-panel-text">
              Каждый третий рубль на спонсорство может уйти в пустую, если нет
              точных данных о каждом показе вашего бренда
            </p>
          </div>
        </div>

        <div className="budget-loss-cta">
          <button className="budget-loss-button">Проверить свои потери</button>
          <p className="budget-loss-cta-text">
            Узнайте, сколько реально теряет ваш бренд
          </p>
        </div>
      </div>
    </section>
  );
}

export default BudgetLoss;
