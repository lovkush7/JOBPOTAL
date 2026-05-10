import { Body, Controller, Get, Post, Request, Route, Security } from "tsoa";
import type JobsDto from "../../dto/jobs.dto.ts";
import jobsServices from "../../Service/jobs/jobs.services.ts";

@Route("jobs")
export class JobController  extends Controller {

    @Post("createjob")
    @Security("jwt")
    async createjob(
        @Body() body: JobsDto, 
        @Request() request: any
    ){
     try{
      const user = request.user.id;
      console.log("Authenticated user:", user);
      if(!user){
        throw new Error("User not authenticated");
      }
      return await jobsServices.createJob(body, user)
     }catch(err){
        console.log(err)
        throw err;
     }
    }
    @Get("getjobs")
  
    async getjobs(){
        return await jobsServices.getjobs();
    }
}