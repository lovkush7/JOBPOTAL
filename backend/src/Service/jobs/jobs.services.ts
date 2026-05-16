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
        try {
            const existinguser = await User.findOne({
                where: {
                    id: user
                }
            })
            if (!existinguser) {
                throw new Error("User not found")
            }
            if (existinguser.role === UserRole.EMPLOYEE) {

                const newjob = new Jobs();
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

        } catch (err) {
            throw err;
        }

    }

    async getjobs() {
        try {

            const joobs = await Jobs.find({
                relations: {
                    user: true
                }
            });
            return joobs;
        } catch (err) {
            throw err;
        }
    }
    async searchjobs(
        page: number ,
        limit: number,
        search: string,
        kind: string,
        type: string,
        status: string,

    ) {
        try{
            const job = await Jobs.createQueryBuilder("j")
            .leftJoinAndSelect("j.user", "user")
           
             if(kind){
                job.andWhere("j.jobkind = :kind",{
                    kind: kind
                })
             }
             if(type){
                job.andWhere("j.jobType = :type",{
                    type: type
                })

             }
             if(status){
                job.andWhere("j.jobStatus = :status",{
                    status: status
                })

             }
             if(search){
                job.andWhere("j.title ILIKE :search",{
                    search: `%${search}%`
                })
             }
             job.orderBy("j.createdAt", "DESC")

             .skip((page -1)*limit)
             .take(limit);

             const [data, total] = await job.getManyAndCount();
             
             return{
                data,
                total,
                currentpage: page,
                totalpages: Math.ceil(total/limit)
             }
            
        }catch(err){
            throw err;
        }

    }
}
export default new JobsService();