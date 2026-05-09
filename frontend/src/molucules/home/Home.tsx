import Navbar from '@/atoms/Navbar/Navbar'
import Search from '@/atoms/searchbar/Search'
import AuthStore from '@/authStore/AuthStore'
import React, { useEffect } from 'react'
import Jobs from '../body/Jobs.body'

const Home = () => {
  const {authuser , check} = AuthStore.getState()
  console.log("authuser:", authuser)
  useEffect(()=>{
  check()
  },[  ])
  console.log("authuser after check:", authuser)
  return (
    <div className='w-full h-screen '>
      <Navbar/>
       <Search/>
      <Jobs/>
    
     s
    </div>
  )
}

export default Home
