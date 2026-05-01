import { Body, Controller, Get, Post, Request, Route, Security } from "tsoa";
import type { UserDto } from "../../dto/User.dto.ts";
import AuthServices from "../../Service/Authservice/Auth.services.ts";
import type Logindto from "../../dto/Login.dto.ts";


const buildjwttoken =(token: string)=>{
return `jwt=${token}; HttpOnly; Max-Age=3600; Path=/; SameSite=None; secure `
}
@Route("auth")
 export class Authentication extends Controller{
   @Post("signup")
     async signup(
        @Body() body: UserDto
     ){
    

      const {token, user} = await AuthServices.signup(body.Fullname, body.email, body.password, body.phone, body.address, body.role)
           this.setHeader(
            "Set-Cookie",
            buildjwttoken(token)
           )  
           return {
            success: true,
            user,
            token
           }

     }
     @Post("login")
async login(@Body() body:Logindto){
    try{
      const res =  await AuthServices.login(body)

      const {token, user} = res;

      this.setHeader(
        "Set-Cookie",
         buildjwttoken(token)
      )
      return {
        success: true,
        user,
        token
      }
     
    }catch(err){
        console.log(err)
        throw err;
    }
}
@Get("check")
@Security("jwt")
async check(
  @Request() request: any
){
try{
  return request.user;

}catch(err){
    console.log(err)
    throw err;
}
}
}
