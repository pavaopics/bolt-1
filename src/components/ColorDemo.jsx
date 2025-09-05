import React from 'react'

const ColorDemo = () => {
  const colors = [
    { name: 'Primária', value: '#E75264', varName: '--primary' },
    { name: 'Primária Clara', value: '#FC828E', varName: '--primary-light' },
    { name: 'Secundária Escura', value: '#303B4B', varName: '--secondary-dark' },
    { name: 'Secundária Média', value: '#3B4D5C', varName: '--secondary-medium' },
    { name: 'Secundária Suave', value: '#515A67', varName: '--secondary-soft' },
    { name: 'Neutro Mais Claro', value: '#F1E6E6', varName: '--neutral-light' },
    { name: 'Neutro Médio', value: '#797B7D', varName: '--neutral-medium' },
    { name: 'Neutro Azul-Cinza', value: '#A5AFBA', varName: '--neutral-blue-gray' },
    { name: 'Erro', value: '#6F1722', varName: '--error' },
    { name: 'Sucesso', value: '#FC828E', varName: '--success' },
    { name: 'Feedback Suave', value: '#E2CACC', varName: '--feedback-soft' },
  ]

  return (
    <section className="card">
      <h2>Paleta de Cores</h2>
      <p className="text-muted">Demonstração das cores do design system</p>
      
      <div className="color-grid">
        {colors.map((color, index) => (
          <div 
            key={index} 
            className="color-item" 
            style={{ backgroundColor: color.value, color: index > 4 ? '#fff' : '#000' }}
          >
            <div>{color.name}</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>{color.value}</div>
            <div style={{ fontSize: '0.7rem', marginTop: '0.25rem' }}>{color.varName}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ColorDemo
