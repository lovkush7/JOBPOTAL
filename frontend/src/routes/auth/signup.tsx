
import { SignupForm } from '@/molucules/auth/Signup'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/signup')({
  component:  SignupForm,
})

