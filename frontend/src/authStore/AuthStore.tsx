import { api } from "@/api/api"
import { create } from "zustand"

const AuthStore =  create((set: any)=>({
    authuser: null,


    signup:  async(data: any)=>{    
        try{
        const res  =  await api.post("/auth/signup", data)
        set({authuser: res.data})
          console.log(res.data) 
        return {success: true,}
        }catch(err){
            console.log(err)
            set({authuser: null})
            return {success: false, error: err}
        }
    }
}))
export default AuthStore;