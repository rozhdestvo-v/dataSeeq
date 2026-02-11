import React, { useState } from 'react'
import { Input, Button } from '@heroui/react'
import logoImage from '../assets/LogoHederTitle.svg'
import loginImage from '../assets/loginImage.png'
import '../styles/Login.css'
import '../styles/ChangePassword.css'

function SetNewPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: auth logic - set new password after recovery
    window.location.hash = '#login'
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
        <div className="login-container change-password-container">
          <h1 className="change-password-title">Задайте новый пароль</h1>
          <p className="change-password-subtitle">Задайте новый пароль для использования сервиса</p>
          <form className="login-form change-password-form" onSubmit={handleSubmit}>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Новый пароль"
              value={password}
              onValueChange={setPassword}
              variant="bordered"
              size="lg"
              required
              endContent={
                <button
                  type="button"
                  className="change-password-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              }
              classNames={{
                input: 'text-white placeholder:text-gray-400',
                inputWrapper: 'bg-[rgba(120,120,130,0.3)] border-[rgba(120,120,130,0.2)] hover:border-[rgba(120,120,130,0.4)] rounded-lg min-h-[52px]',
                innerWrapper: '!justify-start'
              }}
            />
            <Input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Повтор пароля"
              value={confirmPassword}
              onValueChange={setConfirmPassword}
              variant="bordered"
              size="lg"
              required
              endContent={
                <button
                  type="button"
                  className="change-password-eye"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {showConfirm ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              }
              classNames={{
                input: 'text-white placeholder:text-gray-400',
                inputWrapper: 'bg-[rgba(120,120,130,0.3)] border-[rgba(120,120,130,0.2)] hover:border-[rgba(120,120,130,0.4)] rounded-lg min-h-[52px]',
                innerWrapper: '!justify-start'
              }}
            />
            <Button type="submit" className="change-password-submit">
              Установить новый пароль
            </Button>
            <Button
              type="button"
              variant="bordered"
              className="change-password-cancel"
              onClick={handleCancel}
            >
              Отмена
            </Button>
            <p className="change-password-help">
              Если Вам нужна дополнительная помощь, свяжитесь с нами
            </p>
          </form>
        </div>
        <p className="login-footer">
          Регистрируясь, Вы соглашаетесь с{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>правилами</a>{' '}
          и{' '}
          <a href="#" onClick={(e) => e.preventDefault()}>политикой сайта</a>
        </p>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="" className="login-image" />
        <p className="change-password-copyright">Все права защищены. 2025 год.</p>
      </div>
    </div>
  )
}

export default SetNewPassword
