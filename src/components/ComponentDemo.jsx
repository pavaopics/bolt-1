import React, { useState } from 'react'

const ComponentDemo = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)
  const [inputValue, setInputValue] = useState('')

  return (
    <section className="card">
      <h2>Componentes</h2>
      <p className="text-muted">Demonstração dos componentes com as cores do design system</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        {/* Botões */}
        <div>
          <h3>Botões</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
            <button className="btn btn-primary">Botão Primário</button>
            <button className="btn btn-secondary">Botão Secundário</button>
          </div>
        </div>
        
        {/* Input */}
        <div>
          <h3>Campo de Texto</h3>
          <input 
            type="text" 
            className="input" 
            placeholder="Digite algo..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginTop: '0.5rem' }}
          />
        </div>
        
        {/* Switch */}
        <div>
          <h3>Switch</h3>
          <label className="switch" style={{ marginTop: '0.5rem' }}>
            <input 
              type="checkbox" 
              checked={isSwitchOn}
              onChange={() => setIsSwitchOn(!isSwitchOn)}
            />
            <span className="slider"></span>
          </label>
          <span style={{ marginLeft: '1rem' }}>
            {isSwitchOn ? 'Ativado' : 'Desativado'}
          </span>
        </div>
        
        {/* Slider */}
        <div>
          <h3>Slider</h3>
          <input 
            type="range" 
            className="range-slider" 
            min="0" 
            max="100" 
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            style={{ marginTop: '0.5rem' }}
          />
          <div style={{ marginTop: '0.5rem' }}>Valor: {sliderValue}</div>
        </div>
        
        {/* Estados */}
        <div>
          <h3>Estados</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            <p className="text-success">Mensagem de sucesso</p>
            <p className="text-error">Mensagem de erro</p>
            <p className="text-muted">Texto secundário/placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComponentDemo
