import { api } from "@/api/api"
import { create } from "zustand"

const jobstore = create((set: any)=>({
    jobs: [],       

    addjob: async(data: any)=>{
        try{
            const res = await api.post("/jobs/createjob", data)
            set({jobs: [...jobstore.getState().jobs, res.data]})
            return {success: true}
        }catch(err){
            console.log(err)
            return {success: false, error: err}
        }
    },
    getjobs: async()=>{
        try{
            const res = await api.get("/jobs/getjobs")
            set({jobs: res.data})
            return {success: true}
        }catch(err){
            console.log(err)
            return {success: false, error: err}
        }
    },

}))
export default jobstore;