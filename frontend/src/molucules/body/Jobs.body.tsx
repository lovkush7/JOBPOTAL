import AuthStore from '@/authStore/AuthStore';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { Toaster } from "@/components/ui/sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import jobstore from '@/authStore/JobsStore';
import { toast } from 'sonner';

const Jobs = () => {
    const {authuser} = AuthStore() as any;
    const [text , setText] = useState({
        title: '',
        company: '',
        location: '',
        salary: '',
        experience: '',
        Reqskills: '',
        jobType: 'FULL_TIME',
        jobkind: 'REMOTE',
        description: '',
    })
    const {addjob} =  jobstore()


  const handleSubmit = async(e: any) => {
    e.preventDefault();

    try { 
      await addjob(text)
      toast.success("Job added successfully", { position: "top-center" })
      setText({
        title: '',  
        company: '',
        location: '',
        salary: '',
        experience: '',
        Reqskills: '',
        jobType: 'FULL_TIME',
        jobkind: 'REMOTE',
        description: '',
      })
    } catch (err) {
      console.log(err)
      toast.error("Failed to add job", { position: "top-center" })
    }
  }
    // console.log("authuser in jobs:", authuser?.role)
  return (
    <div>
      {authuser?.role === "EMPLOYEE" && (
        <div className='flex justify-end p-4 '>
         
       
        <AlertDialog>
  <AlertDialogTrigger >
    <Button variant="outline">Add Job</Button>
  </AlertDialogTrigger>
  <AlertDialogContent className="w-full !max-w-5xl max-h-[90vh] overflow-y-auto  ">
    <form onSubmit={handleSubmit}>
    <AlertDialogHeader>
      
      <Field>
        <FieldLabel className=''>Title</FieldLabel>
        <Input 
        type='text'
          placeholder='job title'
          value={text.title}
          onChange={(e)=>setText({...text, title:e.target.value})}
          required
        />
      </Field>
       <FieldGroup className="grid grid-cols-2 mt-3 ">
      <Field>
        <FieldLabel htmlFor="company-name">CompanyName</FieldLabel>
        <Input 
        id="company-name" 
        placeholder="Company Name" 
        value={text.company}
        onChange={(e)=>setText({...text, company:e.target.value})}

        />
      </Field>
      <Field>
        <FieldLabel htmlFor="locations">locations</FieldLabel>
        <Input
         id="locations" 
        placeholder="Locations" 
        value={text.location}
        onChange={(e)=>setText({...text, location:e.target.value})}
        />
      </Field>
    </FieldGroup>
         <FieldGroup className="grid  grid-cols-2 mt-3 ">
      <Field>
        <FieldLabel htmlFor="salary">Salary</FieldLabel>
        <Input id="salary"
         type='number'
          placeholder="Salary" 
          value={text.salary}
          onChange={(e)=>setText({...text, salary:e.target.value})}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="locations">Experience</FieldLabel>
        <Input id="experience" type='text' placeholder="Experience..." value={text.experience} onChange={(e)=>setText({...text, experience:e.target.value})} />
      </Field>
    </FieldGroup>
     <Field>
        <FieldLabel className=''>skills</FieldLabel>
        <Input 
        type='text'
          placeholder='skills...'
          value={text.Reqskills}
          onChange={(e)=>setText({...text, Reqskills:e.target.value})}
          required
        />
      </Field>
     
              <Field>
            <FieldLabel htmlFor="jobtype">JobType</FieldLabel>
            <Select defaultValue="FULL_TIME" value={text.jobType} onValueChange={(value)=>{
              if(value){
                setText({...text, jobType: value})
              }
            }}>
              <SelectTrigger id="jobtype">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
       
                <SelectItem value="FULL_TIME">Full Time </SelectItem>
                <SelectItem value="PART_TIME">Part Time</SelectItem>
                <SelectItem value="CONTRACT">Contract</SelectItem>
                <SelectItem value="TEMPORARY">Temporary</SelectItem>
                <SelectItem value="INTERN">Intern</SelectItem>
                <SelectItem value="VOLUNTEER">Volunteer</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectContent>
            </Select>
          </Field>
 <Field>

            <FieldLabel htmlFor="jobkind">jobkind</FieldLabel>
            <Select defaultValue="REMOTE" value={text.jobkind}  onValueChange={(value)=>{
              if(value){
                setText({...text, jobkind:value})
              }
            }}>
              <SelectTrigger id="JOBKIND" >
                <SelectValue />
              </SelectTrigger>
              
              <SelectContent>
                <SelectItem value="REMOTE">Remote</SelectItem>
                <SelectItem value="HYBRID">Hybrid</SelectItem>
                <SelectItem value="ON_SITE">On Site</SelectItem>
              </SelectContent>
            </Select>
          </Field>
           <Field data-disabled>
      <FieldLabel htmlFor="textarea">Message</FieldLabel>
      <Textarea
        id="textarea"
          value={text.description}
          onChange={(e)=>setText({...text, description:e.target.value})}
        rows={3}
        placeholder="Type your message here."
       
      />
    </Field>
   
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <Button type='submit'>Add </Button>
    </AlertDialogFooter>
     </form>
  </AlertDialogContent>
</AlertDialog>
 </div>
      )}
 <Toaster />
    </div>
  )
}

export default Jobs;
