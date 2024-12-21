import { useContext, useEffect, useState } from "react"
import { toDoContext } from "../context/ToDoContext"
import { FaTrash, FaCheck } from 'react-icons/fa'
import './pages-style/ToDoList.css'

function ToDoList() {
  const { toDoList, addToDo, removeToDo, toggleDone } = useContext(toDoContext)
  const [newTask, setNewTask] = useState('')
  const [filter, setFiter] = useState('all')
  const [attToDo, setAttToDo] = useState(toDoList)

  const handleAdd = () => {
    if(newTask != '') addToDo(newTask)
    setNewTask('')
  }

  const changeFilter = (value) => {
    setFiter(value)
  }

  useEffect(() => {
    setAttToDo(toDoList.filter(toDo => {
      if(filter === 'all') return toDo
      if(filter === 'done') return toDo.completed
      if(filter === 'append') return !toDo.completed
    }))
  }, [filter, newTask, removeToDo])

  return(
    <div className="container" style={{ background: '#7d97e0', width: '450px', gap: '20px', margin: '40px auto', borderRadius: '10px', boxShadow: '1px 1px 7px rgba(0, 0, 0, .5)' }}>
      <div className="form-area">
        <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} onKeyDown={(event) => {if(event.key === 'Enter') handleAdd()}} placeholder="Adicione uma nova tarefa"/>
        <button onClick={handleAdd}>Adicionar</button>
      </div>
      <select id="filter" onChange={(e) => changeFilter(e.target.value)}>
        <option value="all" selected>Todas</option>
        <option value="done">Feitas</option>
        <option value="append">Pendentes</option>
      </select>
      <ul>
        {attToDo.map(toDo => (
            <li 
            className={toDo.completed ? 'done' : 'append'}
            key={toDo.id}>
              {toDo.task}
              <div className="button-area">
                <button onClick={() => toggleDone(toDo.id)}><FaCheck /></button>
                <button onClick={() => removeToDo(toDo.id)}><FaTrash /></button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )

}

export default ToDoList