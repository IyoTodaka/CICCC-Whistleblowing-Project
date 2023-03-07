import Axios from 'axios'
import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () =>{
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

 
    const signup = async (username,password,realname,department) =>{
        setIsLoading(true)
        setError(null)

        // there 2 ways of making the front and back communicate:
        // 1- install CORS and stablish a connection
        // 2- use a proxy at the json file with the backend endpoint

        Axios.defaults.baseURL='http://localhost:8000'

        Axios.post('api/user/signup',{username,password,realname,department},{headers:{'Content-Type':'application/json'}}).then((response)=>{
           
            localStorage.setItem('user',JSON.stringify(response.data))
            // update auth context
            dispatch({type:'LOGIN',payload:response.data})
            setIsLoading(false)
        }).catch((error)=>{
            setIsLoading(false)
            setError(error.response.data.error)
        })
       
    }
    return {signup,isLoading,error}
}