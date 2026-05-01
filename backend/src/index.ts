import "reflect-metadata"
import AppDataSource from "./config/Database.config.ts"
import  Envconfig from "./config/Envconfig.ts"
import express from "express"
import { RegisterRoutes } from "./routes/routes.ts"
import cookieParser from "cookie-parser"
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
AppDataSource.initialize().
then(()=>{
   RegisterRoutes(app)
    app.listen(8000,()=>{
        console.log("server is running")
    })
    console.log("datasource has initilized")
})
.catch((err)=>{
    console.log(err)
})


