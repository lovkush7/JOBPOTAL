import User from "../../entity/user.entities.ts";

class UserService{
    async getusers(){
        try{
            const user = await User.find({
                select:["Fullname", "email","address","role"]
            })
            return user;

        }catch(err){
            throw err;
        }
    }
}
export default new UserService()