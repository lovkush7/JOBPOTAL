import passport from "passport"
import {Strategy as LocalStrategy} from "passport-local"
import {Strategy as JwtStrategy, ExtractJwt} from "passport-jwt"
import User from "../entity/user.entities.ts"
import Envconfig from "./Envconfig.ts"

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",

        },
        async (email, password, done)=>{
         try{
            const user = await  User.findOne({
                where:{
                    email: email.toLowerCase(),
                },
                select:["id", "email", "Fullname"]
            })
            if(!user){
                return done(null, false,{message: "user not found"})
            }
            const isValid = await user.validatePassword(password);
            if(!isValid){
                return done(null, false, {message: "invalid password"})
            }
            
            return done(null, user)

         }catch(err){
            console.log(err);
            return done(err)
         }
        }
    )
)

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: Envconfig.JWT_SECRET!,
            algorithms: ["HS256"],
        },

        async(payload , done)=>{
            try{
                const user = await User.findOne({
                    where:{
                        id: payload.sub,
                    }
                })

                if(!user){
                    return done(null, false)
                }
                return done(null, user)
            }catch(err){
                console.log(err);
                return done(err)
            }
        }
    )
)