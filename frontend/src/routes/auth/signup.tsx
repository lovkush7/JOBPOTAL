
import AuthStore from '@/authStore/AuthStore'
import { SignupForm } from '@/molucules/auth/Signup'

import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/signup')({
  beforeLoad: async () => {
    const {check, authuser} = AuthStore.getState()
    await check()
    if(authuser ){
     throw redirect({to: "/"})
    }
  },
  component:  SignupForm,
})

