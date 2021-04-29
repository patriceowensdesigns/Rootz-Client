import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './components/Main';

function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  
  return (
    <div className="App">
      <Main setToken={setToken} setRole={setRole} />
    </div>
  )
}

export default App
