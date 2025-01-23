import Header from './Header.jsx';
import Calculation from './calculation.jsx';
import { useState } from 'react';
import TokenMcap from './tokenMcap.jsx';
import TokenFdv from './TokenFdv.jsx';
import './App.css'

function App() {
  const[currentPage, setCurrentPage] = useState("adValue");
  return (
    <>
      <Header changePage={setCurrentPage} />
      {currentPage === "adValue" && <Calculation/>}
      {currentPage === "tokenMcap" && <TokenMcap/>}
      {currentPage === "tokenFdv" && <TokenFdv/>} 
    </>
  )
}

export default App
