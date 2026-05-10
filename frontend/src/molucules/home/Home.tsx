import Navbar from '@/atoms/Navbar/Navbar'
import Search from '@/atoms/searchbar/Search'
import AuthStore from '@/authStore/AuthStore'
import React, { useEffect } from 'react'
import Jobs from '../body/Jobs.body'
import jobstore from '@/authStore/JobsStore'
import Mapjob from '../body/Mapjob'

const Home = () => {
  const {authuser , check} = AuthStore.getState()
  const {getjobs, jobs}= jobstore()
  console.log("authuser:", authuser)
  useEffect(()=>{
  check()
  getjobs()
  },[  ])
  console.log("authuser after check:", authuser)
  console.log("jobs:", jobs)
  return (
    <div className='w-full h-screen '>
      <Navbar/>
       <Search/>
      <Jobs/>
      <Mapjob/>
     s
    </div>
  )
}

export default Home
