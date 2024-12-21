import { createContext, useState } from "react"

export const toDoContext = createContext()

export const ToDoProvider = ({children}) => {
  const [toDoList, setToDo] = useState([
    {id: 1, task: 'Fazer compras', completed: false},
    {id: 2, task: 'Passear com o cachorro', completed: true}
  ])

  const addToDo = (task) => {
    setToDo([...toDoList, { id: Date.now(), task, completed: false }])
  }

  const removeToDo = (id) => {
    setToDo(toDoList.filter(toDo => toDo.id !== id))
  }

  const toggleDone = (id) => {
    let  newToDoList = toDoList.map(toDo => {
      if(toDo.id === id) toDo.completed = !toDo.completed
      return toDo
    })
    setToDo(newToDoList)
  }

  return (
    <toDoContext.Provider value={{ toDoList, addToDo, removeToDo, toggleDone }}>
      {children}
    </toDoContext.Provider>
  )
}