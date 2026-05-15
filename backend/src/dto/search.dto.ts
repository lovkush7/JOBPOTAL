import { IsEnum, isEnum, isNumber, IsNumber, IsString } from "class-validator";
import { jobkind } from "../Enum/Enum.ts";

class SearchDto {
    @IsString()
    search: string;

    @IsNumber()
    page: number;

    @IsNumber()
    limit: number;

    @IsEnum(jobkind)
    kind: jobkind;

}
export default SearchDto;