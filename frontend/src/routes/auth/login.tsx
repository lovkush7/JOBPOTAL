
import AuthStore from '@/authStore/AuthStore'
import { LoginForm } from '@/molucules/auth/Login'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  beforeLoad: async () => {
    const {check, authuser} = AuthStore.getState()
    await check()
    if(authuser ){
    throw  redirect({to: "/"})
    }
  },
  component: LoginForm,
})

