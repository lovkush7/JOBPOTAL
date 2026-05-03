import type { Request } from "express"
import {Strategy as JwtStrategy, ExtractJwt} from "passport-jwt"
import Envconfig from "../Envconfig.ts";
import User from "../../entity/user.entities.ts";

const cookieExrator = (req: Request)=>{
 return req.cookies?.jwt ?? null ;
}

export const jwtstragety = new JwtStrategy(
 {
    jwtFromRequest: ExtractJwt.fromExtractors([
        cookieExrator,
        ExtractJwt.fromAuthHeaderAsBearerToken()
    ]),
    secretOrKey: Envconfig.JWT_SECRET!,
    passReqToCallback: true
 }   ,

 async(req: Request, payload:{sub: string, email: string}, done)=>{

    try{
        const user = await User.findOne({
            where:{
                id: payload.sub,
                isActive: true
            }
        })
        if(!user){
            return done
        }
        return done(null, user)

    }catch(err){
        done(err, null)
    
    } }
)