import { BeforeInsert, Column, Entity } from "typeorm";
import CommonEntity from "./commonentity.ts";
import { UserRole } from "../Enum/Enum.ts";
import bcrypt from "bcrypt"

@Entity("user")
class User  extends CommonEntity{

    @Column({type: "text"})
    Fullname: string

     @Column({type: "text", unique: true})
     email: string;

     @Column({type: "text"})
     password: string;

     @Column({type: "text"})
     phone: string;

     @Column({type: "text"})
     address: string;

     @Column({type: "enum", enum: UserRole, default: UserRole.JOB_SEEKER})
     role: UserRole;

     @BeforeInsert()
     _(){
        this.password = bcrypt.hashSync(this.password, 10)
     }


}
export default User;