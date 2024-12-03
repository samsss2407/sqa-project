import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Routes, Route} from 'react-router-dom'
import SignupPage from './Components/test1.jsx'
import LoginPage from './Components/login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route path='/' element = {<LoginPage/>}></Route>
      <Route path='/reg' element = {<SignupPage/>}></Route>
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
   
    </Routes>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
