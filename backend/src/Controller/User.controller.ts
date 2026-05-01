import { Controller, Get, Route } from "tsoa";


@Route("user")
export class User extends Controller{
    @Get("")
    public async getUser(): Promise<any> {
        return {
            message: "User fetched successfully"
        };
    }

}
