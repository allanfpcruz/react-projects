import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { backgroundContext } from './context/BackgroundContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Counter from './pages/Counter'
import './App.css'
import Background  from './pages/Background'
import ToDoList from './pages/ToDoList'
import Cronometer from './pages/Cronometer'
import SearchNames from './pages/SearchNames'
import Form from './pages/Form'
import Gallery from './pages/Gallery'
import Timer from './pages/Timer'
import NavTab from './pages/NavTab'


function App() {
  const { background } = useContext(backgroundContext)
  return (
    <>
      <Router>
        <Navbar />
        <main style={{ background: background }}>
          <Routes>
            <Route
              path='/'
              element={
                <Home />
              }
            />
            <Route
              path='/counter'
              element={
                <Counter />
              }
            />
            <Route
              path='/background'
              element={
                <Background />
              }
            />
            <Route
              path='/to-do-list'
              element={
                <ToDoList />
              }
            />
            <Route
              path='/cronometer'
              element={
                <Cronometer />
              }
            />
            <Route
              path='/search'
              element={
                <SearchNames />
              }
            />
            <Route
              path='/form'
              element={
                <Form />
              }
            />
            <Route
              path='/gallery'
              element={
                <Gallery />
              }
            />
            <Route
              path='/timer'
              element={
                <Timer />
              }
            />
            <Route
              path='/navtab'
              element={
                <NavTab />
              }
            />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
