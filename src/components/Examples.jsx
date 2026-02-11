import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import footballImage from "../assets/footballImgae.png";
import hockeyImage from "../assets/hocckeyImgae.png";
import basketballImage from "../assets/backballImgae.png";
import kotanieImage from "../assets/KotanieImgae.png";
import SportDataPanel from "./SportDataPanel";
import "../styles/Examples.css";

function Examples() {
  const [activeSport, setActiveSport] = useState("football");

  const sports = [
    { id: "football", name: "Футбол", image: footballImage },
    { id: "hockey", name: "Хоккей", image: hockeyImage },
    { id: "basketball", name: "Баскетбол", image: basketballImage },
    { id: "figure-skating", name: "Фигурное катание", image: kotanieImage },
  ];

  return (
    <section id="examples" className="examples">
      <div className="examples-images-preload">
        <img src={sports[0].image} />
        <img src={sports[1].image} />
        <img src={sports[2].image} />
        <img src={sports[3].image} />
      </div>
      <div className="examples-container">
        <h2 className="examples-title">Примеры</h2>
        <p className="examples-description">
          Dataseeq можно использовать в разных видах спорта. Стримах, клипах и
          т.д.
        </p>

        <div className="sport-tabs-wrapper">
          <Tabs
            selectedKey={activeSport}
            onSelectionChange={(key) => setActiveSport(key)}
            aria-label="Виды спорта"
            variant="solid"
            color="secondary"
            radius="full"
            classNames={{
              base: "sport-tabs-base",
              tabList: "sport-tabs-list",
              tab: "sport-tabs-tab",
              tabContent: "sport-tabs-tab-content",
              cursor: "sport-tabs-cursor",
              panel: "sport-tabs-panel",
            }}
          >
            {sports.map((sport) => (
              <Tab key={sport.id} title={sport.name}>
                <div className="sport-image-inner">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="sport-image"
                    loading="eager"
                    draggable="false"
                  />
                  {(sport.id === "football" ||
                    sport.id === "hockey" ||
                    sport.id === "basketball" ||
                    sport.id === "figure-skating") && (
                    <SportDataPanel sport={sport.id} />
                  )}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Examples;
