import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Examples from "./components/Examples";
import BudgetLoss from "./components/BudgetLoss";
import Razdel from "./components/Razdel";
import Solutions from "./components/Solutions";
import Advantages from "./components/Advantages";
import BusinessResults from "./components/BusinessResults";
import ComparisonTable from "./components/ComparisonTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";
import Login from "./components/Login";
import ChangePassword from "./components/ChangePassword";
import RecoverAccess from "./components/RecoverAccess";
import RecoverCode from "./components/RecoverCode";
import SetNewPassword from "./components/SetNewPassword";
import "./styles/App.css";
import { HeroUIProvider } from "@heroui/react";

function App() {
  const [route, setRoute] = useState(() => {
    const h = window.location.hash;
    if (h === "#login") return "login";
    if (h === "#change-password") return "change-password";
    if (h === "#recover") return "recover";
    if (h === "#recover-code") return "recover-code";
    if (h === "#set-password") return "set-password";
    return "main";
  });
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const h = window.location.hash;
      if (h === "#login") setRoute("login");
      else if (h === "#change-password") setRoute("change-password");
      else if (h === "#recover") setRoute("recover");
      else if (h === "#recover-code") setRoute("recover-code");
      else if (h === "#set-password") setRoute("set-password");
      else setRoute("main");
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  if (route === "login") return <Login />;
  if (route === "change-password") return <ChangePassword />;
  if (route === "recover") return <RecoverAccess />;
  if (route === "recover-code") return <RecoverCode />;
  if (route === "set-password") return <SetNewPassword />;

  return (
    <div className="app">
      <div className="app-inner">
      <Header onOpenDemo={() => setIsDemoOpen(true)} />
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <HowItWorks />
        <Examples />
        <BudgetLoss />
        <Razdel />
        <Solutions />
        <Advantages onOpenDemo={() => setIsDemoOpen(true)} />
        <BusinessResults onOpenDemo={() => setIsDemoOpen(true)} />
        <ComparisonTable onOpenDemo={() => setIsDemoOpen(true)} />
        <ContactForm />
      </div>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}

export default App;
