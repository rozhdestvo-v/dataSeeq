import React from 'react'
import '../styles/ComparisonTable.css'

function ComparisonTable({ onOpenDemo }) {
  const rows = [
    {
      metric: 'Скорость',
      manual: '14 дней',
      foreign: '5 дней',
      dataseeq: '5 минут'
    },
    {
      metric: 'Точность',
      manual: '85%',
      foreign: '95%',
      dataseeq: '99,8%'
    },
    {
      metric: 'Доступность',
      manual: true, // checkmark
      foreign: false, // cross
      dataseeq: true // checkmark
    },
    {
      metric: 'Контроль',
      manual: 'Субъективно',
      foreign: 'Сложно',
      dataseeq: '100% онлайн'
    },
    {
      metric: 'Цена',
      manual: 'Высокая',
      foreign: 'Высокая',
      dataseeq: 'Доступная'
    }
  ]

  return (
    <section className="comparison-table">
      <div className="comparison-table-container">
        <h2 className="comparison-title">Почему выбирают Dataseeq?</h2>
        
        <div className="table-wrapper">
          <table className="comparison-table-content">
            <thead>
              <tr>
                <th className="table-header-metric"></th>
                <th className="table-header">Ручной анализ</th>
                <th className="table-header">Зарубежные решения</th>
                <th className="table-header dataseeq-header">Dataseeq</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="table-row">
                  <td className="table-metric">{row.metric}</td>
                  <td className="table-cell">
                    {typeof row.manual === 'boolean' ? (
                      <span className={row.manual ? 'checkmark' : 'cross'}>{row.manual ? '✓' : '✗'}</span>
                    ) : (
                      row.manual
                    )}
                  </td>
                  <td className="table-cell">
                    {typeof row.foreign === 'boolean' ? (
                      <span className={row.foreign ? 'checkmark' : 'cross'}>{row.foreign ? '✓' : '✗'}</span>
                    ) : (
                      row.foreign
                    )}
                  </td>
                  <td className="table-cell dataseeq-cell">
                    {typeof row.dataseeq === 'boolean' ? (
                      <span className={row.dataseeq ? 'checkmark' : 'cross'}>{row.dataseeq ? '✓' : '✗'}</span>
                    ) : (
                      row.dataseeq
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison-cta">
          <button type="button" className="comparison-button" onClick={onOpenDemo}>
            Увидеть все возможности
          </button>
          <p className="comparison-cta-text">
            Пройдите бесплатный аудит и<br />посмотрите на реальные данные
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable

