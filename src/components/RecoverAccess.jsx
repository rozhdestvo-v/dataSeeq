import React, { useState } from 'react'
import { Input, Button } from '@heroui/react'
import { RECOVER_EMAIL_KEY } from '../utils/auth'
import logoImage from '../assets/LogoHederTitle.svg'
import loginImage from '../assets/loginImage.png'
import '../styles/Login.css'
import '../styles/RecoverAccess.css'

function RecoverAccess() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem(RECOVER_EMAIL_KEY, email)
    window.location.hash = '#recover-code'
    // TODO: auth logic - send recovery code
  }

  const handleCancel = () => {
    window.location.hash = '#login'
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <a href="#/" className="login-logo" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }}>
          <img src={logoImage} alt="DataSeeq" className="login-logo-image" loading="eager" />
        </a>
        <div className="login-container recover-access-container">
          <div className="recover-access-header">
            <a href="#login" className="recover-access-back" onClick={(e) => { e.preventDefault(); window.location.hash = '#login'; }}>
              <span className="recover-access-back-icon">←</span>
            </a>
            <h1 className="recover-access-title">Восстановление доступа</h1>
          </div>
          <p className="recover-access-subtitle">Введите электронную почту, используемую при регистрации</p>
          <form className="login-form recover-access-form" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Электронная почта"
              value={email}
              onValueChange={setEmail}
              variant="bordered"
              size="lg"
              required
              startContent={
                <span className="recover-access-email-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
              }
              classNames={{
                input: 'text-white placeholder:text-gray-400',
                inputWrapper: 'bg-[rgba(120,120,130,0.3)] border-[rgba(120,120,130,0.2)] hover:border-[rgba(120,120,130,0.4)] rounded-lg min-h-[52px]',
                innerWrapper: '!justify-start'
              }}
            />
            <Button type="submit" className="recover-access-submit">
              Отправить код доступа
            </Button>
            <Button
              type="button"
              variant="bordered"
              className="recover-access-cancel"
              onClick={handleCancel}
            >
              Отмена
            </Button>
            <p className="recover-access-help">
              Если Вам нужна дополнительная помощь, свяжитесь с нами
            </p>
          </form>
        </div>
        <div className="recover-access-footer">
          <p className="login-footer">
            Регистрируясь, Вы соглашаетесь с{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>правилами</a>{' '}
            и{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>политикой сайта</a>
          </p>
          <p className="recover-access-copyright">Все права защищены. 2025 год.</p>
        </div>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="" className="login-image" />
      </div>
    </div>
  )
}

export default RecoverAccess
