import type JobsDto from "../../dto/jobs.dto.ts";
import type { UserDto } from "../../dto/User.dto.ts";
import Jobs from "../../entity/jobs.entitiy.ts";
import User from "../../entity/user.entities.ts";
import { UserRole } from "../../Enum/Enum.ts";

class JobsService {
    async createJob(
        body: JobsDto,
        user: string
    ) {
        try{
            const existinguser = await User.findOne({
                where:{
                    id: user
                }
            })
            if(!existinguser){
                throw new Error("User not found")
            }
            if(existinguser.role === UserRole.EMPLOYEE){
            
            const newjob =  new Jobs();
            newjob.title = body.title;
            newjob.description = body.description;
            newjob.company = body.company;  
            newjob.location = body.location;    
            newjob.salary = body.salary;
            newjob.experience = body.experience;
            newjob.Reqskills = body.Reqskills;
            newjob.jobType = body.jobType;
            newjob.jobkind = body.jobkind;
            newjob.user = existinguser;
            await newjob.save();

            return newjob;
            }
                throw new Error("Unauthorized to create job")
                
        }catch(err){
            throw err;
        }

    }

    async getjobs(){
        try{

            const joobs = await Jobs.find({
                relations:{
                    user: true
                }
            });
            return joobs;
        }catch(err){
                throw err;
        }
    }
}
export default new JobsService();