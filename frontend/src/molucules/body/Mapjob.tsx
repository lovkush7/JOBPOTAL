import jobstore from '@/authStore/JobsStore'
import { Button } from '@/components/ui/button'
import { Map, MapPin } from 'lucide-react'
import React from 'react'
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
                            <SheetContent className="w-full !max-w-4xl ">
                                <SheetHeader>
                                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                                    <SheetDescription>This action cannot be undone.</SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>


                </div>
            ))}
        </div>
    )
}

export default Mapjob
