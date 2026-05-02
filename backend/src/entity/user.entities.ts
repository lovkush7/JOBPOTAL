import { BeforeInsert, Column, Entity, Index } from "typeorm";
import CommonEntity from "./commonentity.ts";
import { AuthProvider, UserRole } from "../Enum/Enum.ts";
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

     @Column({type: 'text', nullable: true})
     avatar: string;

     @Column({type: "enum", enum: AuthProvider, default: AuthProvider.LOCAL})
     authProvider: AuthProvider;
      @Index()
     @Column({type:"text", nullable: true})
     googleId: string;

     @Column({type: 'boolean', default: false})
     isEmailVerified: boolean;


     @Column({type: 'boolean', default: true})
     isActive: boolean;
     
     @Column({type: 'text', nullable: true, select: false})
     refreshToken: string;

     @BeforeInsert()
     _(){
        this.password = bcrypt.hashSync(this.password, 10)
     }

     async validatePassword(plain: string){
      return await bcrypt.compare(plain, this.password)
     }

}
export default User;