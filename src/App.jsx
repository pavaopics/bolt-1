import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const App = () => {
  // Dados fictícios
  const statsData = {
    totalAlunos: 12458,
    cursosAtivos: 47,
    taxaConclusao: 78.5
  }

  const matriculasData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        label: 'Matrículas Mensais',
        data: [120, 190, 300, 500, 200, 300, 420, 530, 680, 750, 900, 1100],
        borderColor: '#9E7FFF',
        backgroundColor: 'rgba(158, 127, 255, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  }

  const categoriasData = {
    labels: ['Programação', 'Design', 'Marketing', 'Negócios', 'Idiomas'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#9E7FFF',
          '#38bdf8',
          '#f472b6',
          '#10b981',
          '#f59e0b'
        ],
        borderWidth: 0
      }
    ]
  }

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }
    }
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    cutout: '70%'
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard de Cursos</h1>
        <p>Visão geral da plataforma de educação</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{statsData.totalAlunos.toLocaleString()}</div>
          <div className="stat-label">Total de Alunos</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">{statsData.cursosAtivos}</div>
          <div className="stat-label">Cursos Ativos</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-value">{statsData.taxaConclusao}%</div>
          <div className="stat-label">Taxa de Conclusão</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Matrículas Mensais</h3>
          </div>
          <div className="chart-container">
            <Line data={matriculasData} options={lineOptions} />
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Distribuição por Categoria</h3>
          </div>
          <div className="chart-container">
            <Doughnut data={categoriasData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
