import Login from './components/auth/Login.jsx'
import Employeedashboard from './components/dashboard/Employeedashboard.jsx'
import AdminDashboard from './components/dashboard/Admindashboard.jsx'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const {userData,setUserData} = useContext(AuthContext)

  useEffect(() => {

        const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
  }
}, []) ;


  const handleLogin = (email, password) => {
    if(email === 'admin@example.com' && password === '123') {
      setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({ role:'admin' }))
    }else if (authData?.userData?.employees) {
      const employee = userData.employees.find(user => user.email === email && user.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role:'employee',data:employee }))
      }
    }
     else {
        alert('Invalid email or password')
      }
  }


  return (
<>
  {!user ? <Login handleLogin={handleLogin}/> : ''}
  {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : ( user === 'employee' && loggedInUserData ? <Employeedashboard changeUser={setUser} data={loggedInUserData} /> : null )}
</>
  )
}

export default App
