import { useNavigate } from "react-router-dom"
import './pages-style/Home.css'

function Home() {
  const navigate = useNavigate()
  const goTo = (page) => {
    navigate(`/${page}`)
  }

  return(
    <div className="container" style={{flexFlow: 'row wrap'}}>
      <div className="item" onClick={() => goTo('counter')}>
        <img src="contador.png" alt="counter project" />
        <div className="description">
          <h3>Counter</h3>
          <p>Contador simples utilizando useState.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('background')}>
        <img src="background.jpg" alt="background project" />
        <div className="description">
          <h3>Background</h3>
          <p>Mude a cor de fundo da página.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('to-do-list')}>
        <img src="to-do-list.jpg" alt="to-do-list project" />
        <div className="description">
          <h3>ToDo List</h3>
          <p>Organize suas tarefas.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('cronometer')}>
        <img src="to-do-list.jpg" alt="cronometer project" />
        <div className="description">
          <h3>Cronometro</h3>
          <p>Temporize seu tempo.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('search')}>
        <img src="to-do-list.jpg" alt="search project" />
        <div className="description">
          <h3>Pesquisa</h3>
          <p>Pesquise entre uma lista de nomes.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('form')}>
        <img src="to-do-list.jpg" alt="form project" />
        <div className="description">
          <h3>Formulário</h3>
          <p>Preencha um formulário de login.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('gallery')}>
        <img src="to-do-list.jpg" alt="gallery project" />
        <div className="description">
          <h3>Galeria</h3>
          <p>Navegue entre imagens</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('timer')}>
        <img src="to-do-list.jpg" alt="timer project" />
        <div className="description">
          <h3>Temporizador</h3>
          <p>Controle seu tempo.</p>
        </div>
      </div>
      <div className="item" onClick={() => goTo('navtab')}>
        <img src="to-do-list.jpg" alt="timer project" />
        <div className="description">
          <h3>Tab's navegáveis</h3>
          <p>Navegue entre opções.</p>
        </div>
      </div>
    </div>
  )
}

export default Home