import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"gaurav",
    age:21
  }
  let newArr = [1,2,3]
  return (
    <>
<Card username ="gaurav" btnText="click Me!" />
<Card username ="malla" btnText="visit Me!" />
    </>
  )
}

export default App
