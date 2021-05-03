import React, {useState, useEffect} from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './components/Main';
import { Auth } from './auth/Auth';
import Product from './components/Product';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [role, setRole] = useState('');

    return (
    <div className="App">
      <Main sessionToken={setSessionToken} setRole={setRole} />
    </div>
  )
}

export default App
