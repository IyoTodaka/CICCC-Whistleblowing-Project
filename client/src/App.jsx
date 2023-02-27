import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const connectCheck = async () => {
      const response = await fetch('http://localhost:8000/api')
      const result = await response.json()
      console.log(result);
    }
    connectCheck()
  }, [])

  return (
    <>App</>
  )
}

export default App
