import { useEffect, useState } from "react"
import useUsers from "../hooks/useUsers"
import Loader from "../components/Loader"
import './pages-style/SearchNames.css'

function SearchNames() {
  const { users, userList, setUserList, loading } = useUsers()

  const [search, setSearch] = useState('')
  
  const changeSearch = (value) => {
    setSearch(value)
  }
  
  useEffect(() => {
    search != '' ? setUserList(users.filter(user => user.name.toUpperCase().slice(0, search.length) === search.toUpperCase() 
    )) : setUserList(users)
  }, [search])
  
  if(loading) return <Loader />
  return(
    <div className="content">
      <input type="text" placeholder="Pesquise um nome" onChange={(e) => changeSearch(e.target.value)}/>
      <ul>
      {userList.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>
    </div> 
  )
}

export default SearchNames

