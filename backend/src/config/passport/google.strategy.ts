import {Strategy as GoogleStrategy ,  } from "passport-google-oauth20"
import Envconfig from "../Envconfig.ts"
import type { Profile } from "passport"
import User from "../../entity/user.entities.ts";
import { AuthProvider } from "../../Enum/Enum.ts";


const googestrategy = new GoogleStrategy(
    {
        clientID: Envconfig.CLIENT_ID!,
        clientSecret: Envconfig.CLIENT_SECRET!,
        callbackURL: Envconfig.CALLBACK_URL!,
        scope: ["email", "profile"]
        
    },
 async (accessToken: string, refreshToken: string, profile: Profile, done: any )=>{
    try{
        const email = profile.emails?.[0]?.value;

        if(!email){
            return done(new Error("Email not found"), false, )
        }
        let user = await User.findOne({
            where:{
                email: email
            }
        })
        if(user){
            if(user.authProvider === AuthProvider.LOCAL){
                
                 user.googleId = profile.id;
                 user.authProvider = AuthProvider.GOOGLE;
                 user.isEmailVerified= true;
                 user.avatar = user.avatar || profile.photos?.[0]?.value ||  "";

                 await user.save()
                 
            }
            return done(null , user)
            
        }
        const newuser = new User();
        newuser.Fullname = profile.displayName;
        newuser.email = email;
        newuser.avatar = profile.photos?.[0]?.value || "";
        newuser.googleId = profile.id;
        newuser.authProvider = AuthProvider.GOOGLE;
        newuser.isEmailVerified = true;
        await newuser.save();
        return done(null, newuser)


    }catch(err){
        done(err, null)
    
    }

 }
)
export default googestrategy;