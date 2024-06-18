"use client"
import React, { useState } from 'react'
import styles from "@/app/dashboard/(auth)/register/page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Buton from '@/components/Buton/Buton'

const register = () => {

  const [err,setErr]= useState(false)
  const router = useRouter()

const handleSubmit = async(e)=>{
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
   

  
    try{

      const res = await fetch("/api/auth/register" , {
        method:"POST",
        headers:{
          "Content-Type": "application/json",

        },
        body:JSON.stringify({
          name,
          email,
          password,
        }),
      })
    

     if( res.status===201){
      router.push("/dashboard/login?success=Account has been created")
    }else{
      setErr(true)
    }
  }

  catch (err){
    setErr(true)
  }
}



  return (
    <div className={styles.container}>

      <div>Already an USER ?</div>
      
      <Buton text="Sign In" url ="/dashboard/login" />

      <div>Otherwise</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input 

        type ="text"
        placeholder="username"
        className={styles.input}
        required
        
        />
      
        <input 

        type ="email"
        placeholder="email"
        className={styles.input}
        required
        
        />
      
        <input 

        type ="password"
        placeholder="password"
        className={styles.input}
        required

        
        />
      <button className={styles.button}>Register</button>
      </form>
      {err && <p>"something went wrong"</p>}
     
     
    </div>
  )
}

export default register
