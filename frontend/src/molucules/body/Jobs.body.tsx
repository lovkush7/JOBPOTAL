import AuthStore from '@/authStore/AuthStore';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
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

const Jobs = () => {
    const {authuser} = AuthStore() as any;
    const [text , setText] = useState({
        title: '',
        companyName: '',
        location: '',
        salary: '',
        experience: '',
        skills: '',
        jobType: '',
        jobKind: '',
        message: '',
    })


  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
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
  <AlertDialogContent className="w-full !max-w-5xl ">
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
        value={text.companyName}
        onChange={(e)=>setText({...text, companyName:e.target.value})}

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
          value={text.skills}
          onChange={(e)=>setText({...text, skills:e.target.value})}
          required
        />
      </Field>
     
              <Field>
            <FieldLabel htmlFor="jobtype">JobType</FieldLabel>
            <Select defaultValue="Full_Time" onValueChange={(value)=>{
              if(value){
                setText({...text, jobType: value})
              }
            }}>
              <SelectTrigger id="jobtype">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
       
                <SelectItem value="Full_Time">Full Time</SelectItem>
                <SelectItem value="Part_Time">Part Time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Temporary">Temporary</SelectItem>
                <SelectItem value="Intern">Intern</SelectItem>
                <SelectItem value="Volunteer">Volunteer</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </Field>
 <Field>

            <FieldLabel htmlFor="jobkind">jobkind</FieldLabel>
            <Select defaultValue="REMOTE" onValueChange={(value)=>{
              if(value){
                setText({...text, jobKind:value})
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
          value={text.message}
          onChange={(e)=>setText({...text, message:e.target.value})}
        rows={3}
        placeholder="Type your message here."
       
      />
    </Field>
   
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <Button>Add </Button>
    </AlertDialogFooter>
     </form>
  </AlertDialogContent>
</AlertDialog>
 </div>
      )}

    </div>
  )
}

export default Jobs;
