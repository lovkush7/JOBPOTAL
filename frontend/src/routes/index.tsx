// import  Navbar from '@/atoms/Navbar/Navbar'
import AuthStore from '@/authStore/AuthStore';
// import { Button } from '@/components/ui/button'
import Home from '@/molucules/home/Home';
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async () => {
    const {check, authuser} = AuthStore.getState()
    await check()
    if(!authuser){
      redirect({to: "/auth/login"})
    }
  },
  component: () => <Home/>
})

