import type Logindto from "../../dto/Login.dto.ts"
import User from "../../entity/user.entities.ts"
import type { UserRole } from "../../Enum/Enum.ts"
import GenerateToken from "../../jwt/jwt.ts"
import bcrypt from "bcrypt"
class AuthService {
    async signup(
        Fullname: string,
        email: string,
        password: string,
        phone: string,
        address: string,
        role: UserRole
    ){
       try{
        const user = await User.findOne({
            where:{
                email
            }
        })
        if(user){
            throw new Error("User already exists")

        }
        const newUser = new User()
        newUser.Fullname = Fullname
        newUser.email = email
        newUser.password = password
        newUser.phone = phone
        newUser.address = address
        newUser.role = role
        await newUser.save()

        const token = await GenerateToken(newUser as any)

        return {
            success: true,
            user: newUser,
            token
        }

       }catch(err){
        console.log(err)
        throw err;
       }
    }
    async login(body: Logindto){
        try{
            const user = await User.findOne({
                where:{
                    email: body.email
                }
            })
            if(!user){
               throw new Error("User not found") 
            }
            const ispasscheck = await bcrypt.compare(body.password, user.password)

            if(!ispasscheck){
             throw new Error("Invalid password")   
            }
            
            const token = await GenerateToken(user as any);

            return {
                success: true,
                user: user,
                token
            }

        }catch(err){
            console.log(err)
            throw err;
        }

    }

}
export default new AuthService()