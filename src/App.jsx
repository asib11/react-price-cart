//import { useState } from 'react'
import './App.css'
import Chart from './components/Chart/Chart'
import Navbar from './components/Navbar/Navbar'
import Price from './components/Price/Price'

function App() {
  //const [count, setCount] = useState(0)
 
  return (
    <div>
        <Navbar></Navbar>
      <h1 className="text-7xl font-bold text-cyan-500 text-center mt-4">
        Welcome to Price Cart
      </h1>
      <Price></Price>
      <Chart></Chart>
    </div>
  )
}

export default App
