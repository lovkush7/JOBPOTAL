import Envconfig from "../config/Envconfig.ts";
import type User from "../entity/user.entities.ts";
import jwt from "jsonwebtoken"

const GenerateToken = async(user: User)=>{
const Token = await jwt.sign({
    id: user.id,
    role: user.role

},Envconfig.JWT_SECRET!,
{expiresIn: "7D"}
)

return Token;
}
export default GenerateToken;