import Navbar from '@/atoms/Navbar/Navbar'
import Search from '@/atoms/searchbar/Search'
import AuthStore from '@/authStore/AuthStore'
import React from 'react'

const Home = () => {
  const {authuser} = AuthStore.getState()
  console.log("authuser:", authuser)
  return (
    <div className='w-full h-screen '>
      <Navbar/>
       <Search/>
      
    
     s
    </div>
  )
}

export default Home
