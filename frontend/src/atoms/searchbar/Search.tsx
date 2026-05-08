import React from 'react'
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Search = () => {
  return (
    <div className='flex  w-full '>
     <Dialog >
       <Field className='px-8 py-4 w-full '>
      <ButtonGroup className='w-full'>
          <DialogTrigger className='w-full'> 
        <Input className='w-full' id="input-button-group" placeholder="Type to search..." />
          </DialogTrigger>
       
      
      </ButtonGroup>
    </Field>
   

  <DialogContent className="sm:max-w-[825px] ">
    <DialogHeader>
        
       
    </DialogHeader>
    <div className='flex w-full mt-5'>
        <Input className='w-full' id="input-button-group" placeholder="Type to search..." />
       <Button variant="outline">Search</Button>
    </div>
  </DialogContent>
</Dialog>
   </div>
  )
}

export default Search
