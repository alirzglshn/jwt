import react from 'react'
import {BrowserRouter , Route , Routes , Navigate} from "react-router-dom"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import ProtectedRoots from './components/ProtectedRoots.jsx'

function Logout(){
  localStorage.clear() 
  return <Navigate to={'/login'} />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    < Route 
    path='/'
    element={
      <ProtectedRoots>
        <Home />
      </ProtectedRoots>
    }  
    
    />
    < Route
    path='/login'
    element={
      <Login />
    }
    />

    < Route
    path='/register'
    element={
      <Register />
    }
    />

     < Route
    path='*'
    element={
      <NotFound />
    }
    />

    < Route
    path='/logout'
    element={
      <Logout />
    }
    />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
