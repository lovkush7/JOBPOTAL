import React, { useState } from 'react'
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
import { useMutation } from '@tanstack/react-query'
 
const Search = () => {
  const [Value, setValue] = useState("")
  console.log("the value is ", Value);

  const mutation = useMutation({
    
  })
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
        <Input value={Value} onChange={(e)=>setValue(e.target.value)} className='w-full' id="input-button-group" placeholder="Type to search..." />
       <Button variant="outline">Search</Button>
    </div>
    <div className='flex gap-2'>
      <Button onClick={()=>setValue("REMOTE")} >Remote</Button>
      <Button onClick={()=>setValue("HYBRID")}>Hybrid</Button>
      <Button onClick={()=>setValue("ONSITE")}>On Site</Button>
      <Button onClick={()=>setValue("PENDING")}>Pending</Button>
      <Button onClick={()=>setValue("FULL_TIME")}>Full Time</Button>
      <Button onClick={()=>setValue("PART_TIME")}>Part Time</Button>
    </div>
  </DialogContent>
</Dialog>
   </div>
  )
}

export default Search
