import  Navbar from '@/atoms/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import Home from '@/molucules/home/Home';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Home/>
})

