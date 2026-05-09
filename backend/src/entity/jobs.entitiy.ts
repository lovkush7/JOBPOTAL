import { Column, Entity } from "typeorm";
import CommonEntity from "./commonentity.ts";
import { jobkind, JobType } from "../Enum/Enum.ts";


@Entity("jobs")
class Jobs extends CommonEntity {

    @Column({type: "text"})
    title: string;

    @Column({type: "text"})
    description: string;

    @Column({type: "text"})
    company: string;

    @Column({type: "text"})
    location: string;


    @Column({type: "enum", enum: jobkind, default: jobkind.ON_SITE})
    jobkind: jobkind;

    @Column({type: "text"})
    salary: string;

    @Column({type: "text"})
    experience: string;

    @Column({type: "text", array: true, nullable: true})
    Reqskills: string[];

    @Column({type: "enum", enum: JobType, default: JobType.FULL_TIME})
    jobType: JobType;
}
export default Jobs;