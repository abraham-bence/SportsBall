import { IsDefined, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsDefined({
        message: "Name field must be filled!"
    })
    @IsString()
    name : String
}