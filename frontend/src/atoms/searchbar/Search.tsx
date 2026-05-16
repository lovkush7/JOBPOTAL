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
import {  useMutation } from '@tanstack/react-query'
import { api } from '@/api/api'


const searchdata = async(data : any)=>{
  const res =  await api.post("/jobs/search",data)
  return res.data;
}
 
const Search = () => {
  const [Value, setValue] = useState("")
  console.log("the value is ", Value);

  const mutation = useMutation({
    mutationFn: searchdata,

    onSuccess: ()=>{
      console.log("done")
    }
  })
const handlesubmit = (e: React.FormEvent)=>{
  e.preventDefault()
  mutation.mutate({Value})
}

 
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
    <form action="" onSubmit={handlesubmit}>
    <div className='flex w-full mt-5'>
    
        <Input value={Value} onChange={(e)=>setValue(e.target.value)} className='w-full' id="input-button-group" placeholder="Type to search..." />
       <Button type='submit' variant="outline">Search</Button>
    </div>
    <div className='flex gap-2'>
      <Button
  type="button"
  onClick={() => mutation.mutate({ Value: "REMOTE" })}
>
  Remote
</Button>
      <Button type='button' onClick={()=>setValue("HYBRID")}>Hybrid</Button>
      <Button type='button' onClick={()=>setValue("ONSITE")}>On Site</Button>
      <Button type='button' onClick={()=>setValue("PENDING")}>Pending</Button>
      <Button type='button' onClick={()=>setValue("FULL_TIME")}>Full Time</Button>
      <Button type='button' onClick={()=>setValue("PART_TIME")}>Part Time</Button>
    </div>
    </form>
  </DialogContent>
</Dialog>
   </div>
  )
}

export default Search
