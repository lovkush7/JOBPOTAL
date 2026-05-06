
import { LoginForm } from '@/molucules/auth/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/login')({
  component: LoginForm,
})

