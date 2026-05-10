import jobstore from '@/authStore/JobsStore'
import { Button } from '@/components/ui/button'
import { CircleDollarSign, Map, MapPin, Megaphone } from 'lucide-react'
import React from 'react'
import { format } from "date-fns";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Mapjob = () => {
    const { jobs } = jobstore()
    return (
        <div>
            {Array.isArray(jobs) && jobs.map((job: any) => (
                <div key={job.id} className=' border p-4 m-4 rounded-md shadow-md'>
                    <div className='flex  items-center'>
                        <div className='flex items-center rounded-full w-10 h-10 overflow-hidden mr-4'>
                            <img src={"profile.jpg"} alt={job.user?.name} />
                        </div>
                        <div className='flex flex-col'>
                            <p className='uppercase '><span className='font-bold '>{job.title}</span> at {job.company}</p>
                            <p className='text-sm text-gray-500 flex gap-1.5 items-center'> <span><MapPin size={18} /></span>{job.location}</p>
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        
                        <Sheet>
                            <SheetTrigger><Button>Apply</Button></SheetTrigger>
                            <SheetContent className="w-full h-full overflow-y-auto !max-w-4xl bg-gray-950 text-white">
                                <SheetHeader>
                                    
                                </SheetHeader>
                                <div className='flex divide-x divide-gray-500 items-stretch  flex-row  '>
                                    <div className='flex flex-col gap-3.5 flex-[2]'>
                                        <div className='header flex items-center justify-center gap-1 p-4'>
                                           <p className='uppercase '><span className='font-bold uppercase text-2xl'>{job.title}</span> at {job.company}</p>          
                                        </div>
                                        <div className=' flex items-center gap-4 ml-8'>
                                           <p>posted at {format(new Date(job.createdAt), 'dd/MM/yyyy') } </p>
                                             <p className='flex gap-2 items-center uppercase'><MapPin size={18}/> {job.location}</p>
                                        </div>
                                        <hr className='w-full border border-gray-500  mt-5' />
                                        <div className='mt-2 '>
                                            <p className=" ml-5 whitespace-pre-line break-words" >
                                                {job.description}</p>

                                         <hr className='w-full border border-gray-500  mt-5' />
                                        </div>
                                        <div className='flex flex-col gap-2 items-center justify-center   mt-4'>
                                          <p className='flex gap-2'><CircleDollarSign/>{job.salary}.00</p>
                                          <p>Fixed price</p>

                                          <hr className='w-full border border-gray-500  mt-5' />
                                        </div>
                                        <div className='flex flex-col gap-2.5   '>
                                            <h1 className='font-bold text-2xl ml-5 '>Skills & Expertise</h1>
                                            <p className='ml-5'>Magndatory skills</p>
                                            {Array.isArray(job.Reqskills) && job.Reqskills.map((skills:any)=>(
                                                <p className='ml-5 uppercase'>{skills}</p>
                                            ))}
                                           <hr className='w-full border border-gray-500  mt-5' />
                                        </div>
                                        <div className='flex flex-col gap-2.5   '>
                                            <h1 className='font-bold text-2xl ml-5 '>JobStatus</h1>
                                             <p className='ml-5 font-medium'>Requirement: {job.experience}</p>
                                             <p className='ml-5 font-medium'>JobStatus: {job.jobStatus}</p>
                                             <p className='ml-5 font-medium'>JobType: {job.jobType}</p>
                                             <p className='ml-5 font-medium'>Jobkind: {job.jobkind}</p>
                                            
                                           
                                        </div>
                                    </div>
                                     
                                    <div className='flex-1'>
                                        <div className='inline-flex rounded-md max-w-sm flex mt-6 m-4 bg-gray-600 '>
                                          <p className='p-2  whitespace-pre-line break-words'>
                                            <Megaphone/><span>You’ll need Connects to bid. They’re like credits that show clients you’re serious</span></p>
                                        </div>
                                        <div className='flex items-center justify-center mt-6'>
                                            <Button className="bg-green-600 p-5 rounded-2xl">Buy a contract </Button>
                                        </div>
                                        <hr  className='w-full border border-gray-500  mt-5' />
                                        <div className='flex  flex-col'>
                                            <h1 className='mt-1 ml-4 font-bold text-2xl'>About client</h1>
                                            <p className='ml-5 mt-4'> <span className='font-bold'>Name of client:</span>{job.user?.Fullname}</p>
                                            <span className='font-medium ml-5 mt-2.5 text-lg'>Contract on</span>
                                            <p className='ml-5'>Email:{job.user?.email}</p>
                                            <p className='ml-5 mt-4'>Phone:{job.user?.phone}</p>
                                            <span className='mt-3 ml-5 font-bold'>From</span>
                                            <p className='ml-5'>{job.user?.address}</p>
                                        <br />
                                        <p className='ml-5'>Posted on:  {format(new Date(job.createdAt), 'dd/MM/yyyy') }</p>
                                            
                                        </div>
                                    </div>

                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default Mapjob
