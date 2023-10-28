import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function FreeCoursesProtection({children}) {
    const navigate=useNavigate()
const user=localStorage.getItem('token')
useEffect(()=>{
    if(!user){
        navigate('/login')
    }
},[])
  return (
    <div>
      {user&&children}   
    </div>
  )
}

export default FreeCoursesProtection