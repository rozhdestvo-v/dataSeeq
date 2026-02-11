import React, { useState, useEffect, useRef } from 'react'
import logoImage from '../assets/LogoHederTitle.svg'
import loginImage from '../assets/loginImage.png'
import { RECOVER_EMAIL_KEY } from '../utils/auth'
import '../styles/Login.css'
import '../styles/RecoverAccess.css'
import '../styles/RecoverCode.css'

const CODE_LENGTH = 8

function RecoverCode() {
  const [digits, setDigits] = useState(Array(CODE_LENGTH).fill(''))
  const [email, setEmail] = useState('')
  const inputRefs = useRef([])

  useEffect(() => {
    const stored = sessionStorage.getItem(RECOVER_EMAIL_KEY)
    if (stored) setEmail(stored)
  }, [])

  const code = digits.join('')

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      // Auto-navigate when code is complete
      window.location.hash = '#set-password'
    }
  }, [code])

  const handleChange = (index, value) => {
    if (value.length > 1) {
      const chars = value.slice(0, CODE_LENGTH).split('')
      const newDigits = [...digits]
      chars.forEach((char, i) => {
        if (index + i < CODE_LENGTH && /^[0-9]$/.test(char)) {
          newDigits[index + i] = char
        }
      })
      setDigits(newDigits)
      const nextIndex = Math.min(index + chars.length, CODE_LENGTH - 1)
      inputRefs.current[nextIndex]?.focus()
      return
    }
    if (!/^[0-9]?$/.test(value)) return
    const newDigits = [...digits]
    newDigits[index] = value
    setDigits(newDigits)
    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, CODE_LENGTH)
    const newDigits = [...digits]
    pasted.split('').forEach((char, i) => { newDigits[i] = char })
    setDigits(newDigits)
    inputRefs.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus()
  }

  const handleComplete = () => {
    if (code.length === CODE_LENGTH) {
      // TODO: auth logic - verify code on server
      window.location.hash = '#set-password'
    }
  }

  const handleBack = () => {
    window.location.hash = '#recover'
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <a href="#/" className="login-logo" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.scrollTo(0, 0); }}>
          <img src={logoImage} alt="DataSeeq" className="login-logo-image" loading="eager" />
        </a>
        <div className="login-container recover-code-container">
          <div className="recover-access-header">
            <a href="#recover" className="recover-access-back" onClick={(e) => { e.preventDefault(); handleBack(); }}>
              <span className="recover-access-back-icon">←</span>
            </a>
            <h1 className="recover-access-title">Восстановление доступа</h1>
          </div>
          <p className="recover-code-subtitle">Введите код доступа, который мы выслали на почту</p>
          {email && <p className="recover-code-email">{email}</p>}
          <form className="recover-code-form" onSubmit={(e) => { e.preventDefault(); handleComplete(); }}>
            <div className="recover-code-otp-wrapper" onPaste={handlePaste}>
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength={index === 0 ? 8 : 1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="recover-code-otp-segment"
                  autoComplete="one-time-code"
                />
              ))}
            </div>
          </form>
          <p className="recover-code-help">
            Если Вам нужна дополнительная помощь,{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>свяжитесь с нами</a>
          </p>
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
        <p className="recover-code-copyright-right">Все права защищены. 2025 год.</p>
      </div>
    </div>
  )
}

export default RecoverCode
