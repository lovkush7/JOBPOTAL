import passport from "passport";
import { jwtstragety } from "./jwt.strategy.ts";
import googestrategy from "./google.strategy.ts";

passport.use(jwtstragety)
passport.use(googestrategy);

passport.serializeUser((user: any , done)=> done(null, user.id))
passport.deserializeUser((id , done)=>done(null, {id}as any))

export default passport;