import React, { useState } from "react";
import { Input, Textarea, Button, Checkbox } from "@heroui/react";
import "../styles/ContactForm.css";
import "../styles/DemoModal.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    description: "",
  });
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="demo-modal-padding">
      <div className="demo-modal-bg" />
      <div style={{ left: "0" }} className="demo-modal-bg" />
      <div style={{ padding: "96px 0" }} className="demo-modal-panel">
        <div className="demo-modal-header">
          <div className="demo-modal-feature-pills">
            <span className="demo-modal-pill">
              AI-технологии мирового уровня
            </span>
            <span className="demo-modal-pill">Данные за 5 минут</span>
            <span className="demo-modal-pill">Нет аналогов в России</span>
          </div>
        </div>
        <div className="demo-modal-bottom">
          <div className="demo-modal-left">
            <h2 className="demo-modal-headline">
              Проверьте бренд <br />и опередите рынок
            </h2>
            <p className="demo-modal-description">
              Контролируйте каждый рубль, управляйте эффективностью рекламы с
              ювелирной точностью на основе реальных данных
            </p>
          </div>

          <div className="contact-form-right demo-modal-form-wrapper">
            <form className="contact-form-form" onSubmit={handleSubmit}>
              <div
                className="flex w-full flex-col gap-4"
                style={{ marginBottom: "10px" }}
              >
                <Input
                  type="text"
                  placeholder="ФИО"
                  value={formData.name}
                  onValueChange={(v) => handleChange("name", v)}
                  size="sm"
                  required
                  classNames={{
                    input:
                      "text-white placeholder:text-gray-400 text-lg py-4 !text-left",
                    inputWrapper: "demo-modal-input-wrapper",
                    innerWrapper: "!justify-start",
                  }}
                />
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="text"
                    placeholder="Компания"
                    value={formData.company}
                    onValueChange={(v) => handleChange("company", v)}
                    variant="bordered"
                    size="sm"
                    required
                    classNames={{
                      input:
                        "text-white placeholder:text-gray-400 text-lg py-4 !text-left",
                      inputWrapper: "demo-modal-input-wrapper",
                      innerWrapper: "!justify-start",
                    }}
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onValueChange={(v) => handleChange("phone", v)}
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input:
                      "text-white placeholder:text-gray-400 text-lg py-4 !text-left",
                    inputWrapper: "demo-modal-input-wrapper",
                    innerWrapper: "!justify-start",
                  }}
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onValueChange={(v) => handleChange("email", v)}
                  variant="bordered"
                  size="lg"
                  classNames={{
                    input:
                      "text-white placeholder:text-gray-400 text-lg py-4 !text-left",
                    inputWrapper: "demo-modal-input-wrapper",
                    innerWrapper: "!justify-start",
                  }}
                />
              </div>
              <div className="form-checkboxes">
                <label className="form-checkbox-label">
                  <Checkbox
                    checked={consent1}
                    onChange={(e) => setConsent1(e.target.checked)}
                    className="form-checkbox-input"
                    required
                    color="secondary"
                  >
                    <span className="form-checkbox-text">
                      Я предоставляю свое согласие на обработку персональных
                      данных
                    </span>
                  </Checkbox>
                </label>
                <label className="form-checkbox-label">
                  <Checkbox
                    checked={consent2}
                    onChange={(e) => setConsent2(e.target.checked)}
                    className="form-checkbox-input"
                    color="secondary"
                  >
                    <span className="form-checkbox-text">
                      Я согласен на получение рекламы
                    </span>
                  </Checkbox>
                </label>
              </div>
              <div className="hero-button-wrapper">
                <button
                  className="hero-button"
                  type="submit"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
