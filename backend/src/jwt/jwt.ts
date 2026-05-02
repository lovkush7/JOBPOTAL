import Envconfig from "../config/Envconfig.ts";
import type User from "../entity/user.entities.ts";
import jwt from "jsonwebtoken"

const GenerateToken = async(user: User)=>{
const Token =  jwt.sign({
    id: user.id,
    role: user.role

},Envconfig.JWT_SECRET!,
{expiresIn: "7D"}
)

return Token;
};

const RefreshToken = async(user: User)=>{
 return jwt.sign({
    sub: user.id, email: user.email
 },
Envconfig.REFRESH_TOKEN!, {
    expiresIn: "7D"
})
}
export default GenerateToken;