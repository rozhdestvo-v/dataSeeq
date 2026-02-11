import React from "react";
import { motion } from "framer-motion";
import "../styles/SportDataPanel.css";

const SPORT_DATA = {
  football: {
    brands: {
      ROCEAID: { color: "#CA28C4", label: "ROCEAID" },
      CRICROO: { color: "#A621FF", label: "CRICROO" },
      NIBUFC: { color: "#35B8FF", label: "NIBUFC" },
    },
    reachData: [
      { brand: "ROCEAID", value: 856000, percent: 100 },
      { brand: "CRICROO", value: 508000, percent: 59 },
      { brand: "NIBUFC", value: 485000, percent: 57 },
    ],
    donutData: [
      { brand: "ROCEAID", percent: 45 },
      { brand: "CRICROO", percent: 35 },
      { brand: "NIBUFC", percent: 20 },
    ],
    costData: [
      { brand: "CRICROO", value: 0.4, height: 40 },
      { brand: "ROCEAID", value: 1, height: 100 },
      { brand: "NIBUFC", value: 0.65, height: 65 },
    ],
  },
  hockey: {
    brands: {
      CINEGAL: { color: "#CA28C4", label: "CINEGAL" },
      SPIKES: { color: "#35B8FF", label: "SPIKES" },
      CANIGHAAS: { color: "#A621FF", label: "CANIGHAAS" },
    },
    reachData: [
      { brand: "CINEGAL", value: 508000, percent: 56 },
      { brand: "SPIKES", value: 245000, percent: 27 },
      { brand: "CANIGHAAS", value: 900000, percent: 100 },
    ],
    donutData: [
      { brand: "CANIGHAAS", percent: 42 },
      { brand: "CINEGAL", percent: 38 },
      { brand: "SPIKES", percent: 20 },
    ],
    costData: [
      { brand: "CANIGHAAS", value: 1, height: 100 },
      { brand: "CINEGAL", value: 0.55, height: 55 },
      { brand: "SPIKES", value: 0.27, height: 27 },
    ],
  },
  basketball: {
    brands: {
      CLIVELAND: { color: "#CA28C4", label: "CLIVELAND" },
      NIKE: { color: "#3B82F6", label: "NIKE" },
      ADIDAS: { color: "#A621FF", label: "ADIDAS" },
    },
    reachData: [
      { brand: "CLIVELAND", value: 508000, percent: 100 },
      { brand: "NIKE", value: 245000, percent: 48 },
      { brand: "ADIDAS", value: 485000, percent: 95 },
    ],
    donutData: [
      { brand: "CLIVELAND", percent: 45 },
      { brand: "ADIDAS", percent: 35 },
      { brand: "NIKE", percent: 20 },
    ],
    costData: [
      { brand: "CLIVELAND", value: 1, height: 100 },
      { brand: "NIKE", value: 0.5, height: 50 },
      { brand: "ADIDAS", value: 0.35, height: 35 },
    ],
  },
  "figure-skating": {
    brands: {
      PACO: { color: "#CA28C4", label: "PACO" },
      OTECH: { color: "#3B82F6", label: "OTECH" },
    },
    reachData: [
      { brand: "PACO", value: 508000, percent: 100 },
      { brand: "OTECH", value: 245000, percent: 48 },
    ],
    donutData: [
      { brand: "PACO", percent: 67 },
      { brand: "OTECH", percent: 33 },
    ],
    costData: [
      { brand: "PACO", value: 1, height: 100 },
      { brand: "OTECH", value: 0.48, height: 48 },
    ],
  },
};

function buildDonutGradient(donutData, brands) {
  let gradient = "";
  let start = 0;
  donutData.forEach((item, i) => {
    const end = start + item.percent;
    gradient += `${gradient ? ", " : ""}${brands[item.brand].color} ${start}% ${end}%`;
    start = end;
  });
  return `conic-gradient(${gradient})`;
}

function SportDataPanel({ sport = "football" }) {
  const data = SPORT_DATA[sport] || SPORT_DATA.football;
  const { brands, reachData, donutData, costData } = data;
  return (
    <motion.div
      className="sport-data-panel"
      initial={false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Спонсорский охват */}
      <motion.section
        className="data-panel-section"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="data-panel-title">Спонсорский охват</h3>
        <div className="reach-bars">
          {reachData.map((item, i) => (
            <div key={item.brand} className="reach-bar-row">
              <span className="reach-label">{item.brand}</span>
              <div className="reach-bar-track">
                <motion.div
                  className="reach-bar"
                  initial={false}
                  animate={{ width: `${item.percent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="reach-value">
                {(item.value / 1000).toFixed(0)}k
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Время бренда в кадре */}
      <motion.section
        className="data-panel-section"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="data-panel-title">Время бренда в кадре</h3>
        <div className="donut-section">
          <motion.div
            className="donut-chart"
            style={{
              background: buildDonutGradient(donutData, brands),
            }}
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="donut-hole" />
          </motion.div>
          <div className="donut-legend">
            {donutData.map((item) => (
              <div key={item.brand} className="legend-item">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: brands[item.brand].color }}
                />
                <span className="legend-label">{item.brand}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Сравнение по стоимости */}
      <motion.section
        className="data-panel-section"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="data-panel-title">Сравнение по стоимости</h3>
        <div className="cost-bars">
          {costData.map((item, i) => (
            <div key={item.brand} className="cost-bar-col">
              <div className="cost-bar-track">
                <motion.div
                  className="cost-bar"
                  style={{ backgroundColor: brands[item.brand].color }}
                  initial={false}
                  animate={{ height: `${item.height}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="cost-label">{item.brand}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}

export default SportDataPanel;
