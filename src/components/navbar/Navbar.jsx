"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Dark from '@/components/Darkmode/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const rout = [
    {
        id : 1 ,
        title: "HOME",
        url: "/",
    }
    ,
    {
        id : 2 ,
        title: "PORTFOLIO",
        url: "/portfolio",
    }
    
     ,

    {
        id : 3 ,
        title: "CONTACT",
        url: "/contact",
    }
    ,

    {
        id : 4 ,
        title: "ABOUT",
        url: "/about",
    }
,
    {
        id : 5 ,
        title: "DASHBOARD",
        url: "/dashboard/register",
    }
,



];

const Navbar = () => {

    const session = useSession();
  return (
    <div className={styles.container}>
        <Link href="./" className={styles.logo}>A3RON</Link>
     <div className={styles.llinks}>
     <Dark/>
     {rout.map(link=>
        (<Link key ={link.id}
         href={link.url} className={styles.link}>
            {link.title}
            </Link>))}
    
   { session.status=== "authenticated" && (

    <button className={styles.logout} onClick={signOut}> logout</button>
 )  } </div>        
    </div>
  )
}

export default Navbar
