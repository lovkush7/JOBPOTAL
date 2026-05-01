import { IsEmail,  IsNotEmpty,  IsString } from "class-validator";


class Logindto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}
export default Logindto;