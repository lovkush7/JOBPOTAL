import { IsArray, IsEnum, IsString } from "class-validator";
import { jobkind, JobType } from "../Enum/Enum.ts";

class JobsDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    company: string;

    @IsString()
    location: string;

    @IsString()
    salary: string;

    @IsString()
    experience: string;

    @IsString()
    @IsArray()
    Reqskills: string[];

    @IsString()
    @IsEnum(JobType)
    jobType: JobType;

    @IsString()
    @IsEnum(jobkind)
    jobkind: jobkind;
}


export default JobsDto;