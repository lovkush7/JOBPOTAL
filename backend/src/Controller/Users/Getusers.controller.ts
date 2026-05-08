import { Controller, Get, Route } from "tsoa";

@Route("user")
export class UserController extends Controller{
 @Get("getusers")
 async getusers(){
    
 }
}