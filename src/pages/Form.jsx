import { useState } from "react"
import { TbLogout } from "react-icons/tb";
import './pages-style/Form.css'

function Form() {
  const [isLoged, setIsLoged] = useState(false)
  const [login, setLogin] = useState(false)
  const [name, setName] = useState('')

  const toggleLogin = () => {
    if(name === '') {
      alert('Você ainda não possui cadastro, por favor, realize um!')
      return
    }
    login ? setLogin(false) : setLogin(true)
  }

  if(isLoged) { 
    return(
      <div className="container" style={{ position: 'relative', height: '100%' }}>
        <h1>Bem vindo(a) {name}</h1>
        <button id="logout" onClick={() => setIsLoged(false)}><TbLogout />Logout</button>
      </div>
    )
  } else if(login) {
    return(
      <div className="container" style={{ flexDirection: 'row', gap: '0', padding: '0', height: '100%' }}>
        <div className="img-container"><img src="login.jpg" alt="imagem login" /></div>
        <div className="log-container">
          <h2>Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            setIsLoged(true)
          }}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Digite seu email" required/>
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Digite sua senha" required/>
              <p className="forgot">Esqueceu a senha?</p>
            </div>
            <div className="input-container">
              <button type="submit">Entrar</button>
              <p>Não possui uma conta?<span onClick={toggleLogin}>Cadastre-se</span></p>
            </div>
          </form>
        </div>
      </div>
    )
  } else {
    return(
      <div className="container" style={{ flexDirection: 'row', gap: '0', padding: '0', height: '100%' }}>
        <div className="log-container">
          <h2>Cadastre-se</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            setIsLoged(true)
          }}>
            <div className="input-container">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Digite seu nome" onChange={(e) => { if(e.target.value !== '') setName(e.target.value)}} required/>
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Digite seu email" required/>
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder="Digite sua senha" required/>
            </div>
            <div className="input-container">
              <button type="submit">Cadastrar</button>
              <p>Já possui uma conta?<span onClick={toggleLogin}>Entre já</span></p>
            </div>
          </form>
        </div>
        <div className="img-container"><img src="login.jpg" alt="imagem login" /></div>
      </div>
    )
  }
}

export default Form