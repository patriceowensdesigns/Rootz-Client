import React, {useState, useEffect} from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './components/Main';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [role, setRole] = useState('');

  
    return (
    <div className="App">
      <Main sessionToken={setSessionToken} setRole={setRole} actualToken={sessionToken} />
    </div>
  )
}

export default App
