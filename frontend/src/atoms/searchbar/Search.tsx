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
import {  useMutation, useQuery } from '@tanstack/react-query'
import { api } from '@/api/api'


const searchdata = async(
  page: number,
  search: string,
   type: string,
   status: string,
  kind: string,
 
  
)=>{
  const res =  await api.get("/jobs/searchjobs",
    {
      params:{
       page,
       search,
       type,
       status,
       kind,
        limit:10,

      }
    }
  )
  return res.data;
 
}
 
const Search = () => {
  const [Value, setValue] = useState("")
  const [page, setpage]= useState(1);
  const [search , setsearch] = useState("")
  const [kind, setkind] = useState("")
  const [status, setstatus] = useState("")
  const [type, settype] = useState("")
  
  console.log("the value is ", Value);

  const {data,  isLoading, error} = useQuery({
    queryKey: ["jobs",page, search , type, status,  kind, ],
    queryFn: ()=> searchdata(page, search, type, status,  kind)
  })
const handlesubmit = (e: React.FormEvent)=>{
  e.preventDefault()
  setsearch(Value)
  setpage(1)
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
   <form action="">
    <div className='flex w-full mt-5'>
    
        <Input value={Value} onChange={(e)=>setValue(e.target.value)} className='w-full' id="input-button-group" placeholder="Type to search..." />
       <Button type='submit' onClick={handlesubmit} variant="outline">Search</Button>
    </div>
    <div className='flex gap-2 mt-1'>
      <Button
  type="button"
   onClick={()=>setkind("REMOTE")}
>
  Remote
</Button>
      <Button type='button'  onClick={() =>setkind("HYBRID") }>Hybrid</Button>
      <Button type='button'  onClick={() => setkind("ON_SITE")}>On Site</Button>
      <Button type='button'  onClick={() =>setstatus("PENDING") }>Pending</Button>
      <Button type='button' onClick={() => settype("FULL_TIME")}>Full Time</Button>
      <Button type='button'  onClick={() => settype("PART_TIME")}>Part Time</Button>
    </div>
    </form>
    <div>
   {isLoading && <div>Loading...</div>}
   {error && <div>Error: {error.message}</div>}
    
    {data && data?.data.map((job: any)=>(
      <div key={job.id} className=' border p-4 m-4 rounded-md shadow-md'>
                    <div className='flex  items-center'>
                        <div className='flex items-center rounded-full w-10 h-10 overflow-hidden mr-4'>
                            <img src={"profile.jpg"} alt={job.user?.name} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='uppercase '><span className='font-bold '>{job.title}</span> at {job.company}</p>
                            <p className='text-gray-500'>{job.jobStatus},{job.jobkind}</p>
                        </div>
                    </div>
                    </div>
    ))}
  {
    data && (
      <div>
         <Button
            onClick={() => setpage((p) => p - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>

          <span>
            Page {data.total} of {data.totalPages}
          </span>

          <Button
            onClick={() => setpage((p) => p + 1)}
            disabled={page === data.totalpages}
          >
            Next
          </Button>
      </div>
    )
  }
      
    </div>
  </DialogContent>
</Dialog>
   </div>
  )
}

export default Search
