import { api } from "@/api/api"
import { create } from "zustand"



const AuthStore =  create((set: any)=>({
    authuser: null ,

    check: async ()=>{
        try{
            const res = await api.get("/auth/check")
            set({authuser: res.data})

        }catch(err){
            console.log(err)
            set({authuser: null})
        }
    },


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
    },
    login: async(data: any)=>{
        try{
            const res = await api.post("/auth/login", data)
            set({authuser: res.data})
            console.log(res.data)
            console.log("authuser", AuthStore.getState().authuser)
            return {success: true}
        }catch(err){
            console.log(err)
            set({authuser: null})
            return {success: false, error: err}
        }
    },

    
}))
export default AuthStore;