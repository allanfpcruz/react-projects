import { useState, useEffect } from "react"
import { getUsers } from '../api/UserService'

const useUsers = () => {
  const [users, setUsers] = useState([])
  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        getUsers().then(response => {
          setUsers(response.data)
          setUserList(response.data)  
        })
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
     fetchData()
  }, [])
  return { users, userList, setUserList, loading }
}

export default useUsers