import { useEffect, useState } from 'react'
import {report} from './utils/mongo-client'
import FileUpload from './components/fileUpload'
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'

function App() {
  const [reports,setReports] = useState([])

  // useEffect(() => {
  //   const connectCheck = async () => {
  //     const response = await fetch('http://localhost:8000/api')
  //     const result = await response.json()
  //     console.log(result);
  //   }
  //   connectCheck()
  // }, [])

  return (
    <>
      <Login></Login>
      <Signup></Signup>
      <FileUpload></FileUpload>
    </>
  )
}

export default App
