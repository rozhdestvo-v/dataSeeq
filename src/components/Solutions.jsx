import React from 'react'
import '../styles/Solutions.css'

const solutionPanels = [
  {
    title: 'Бренд-менеджер',
    description: 'Нужна прозрачность и точность. Получайте отчёты, которые убедят руководство и партнёров в эффективности вложений'
  },
  {
    title: 'Digital-директор / CMO',
    description: 'Единый центр управления для всех спонсорских активностей. Быстро, прозрачно, без ошибок'
  },
  {
    title: 'Агентство',
    description: 'Снимайте все споры с клиентов. Отчёты за 15 минут, ни одна интеграция не уходит незамеченной'
  },
  {
    title: 'Организатор',
    description: 'Повышайте доверие спонсоров и обоснуйте цену интеграций с помощью точной и прозрачной аналитики'
  }
]

function Solutions() {
  return (
    <section id="advantages" className="solutions">
      <div className="solutions-container">
        <h2 className="solutions-title">
          Dataseeq решает задачи для<br />
          <span className="solutions-title-highlight">всех</span> участников рынка
        </h2>
        
        <div className="solutions-grid">
          {solutionPanels.map((item, index) => (
            <div key={index} className="solution-card">
              <div className="solution-card-inner">
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
