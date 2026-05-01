import "dotenv/config"

 class Envconfig {
    static  DB_HOST =  process.env.DB_HOST
    static DB_PASSWORD  =  process.env.DB_PASSWORD 
    static DB_PORT = process.env.DB_PORT
    static DB_DATABASE = process.env.DB_DATABASE
    static DB_USER= process.env.DB_USER

    static JWT_SECRET = process.env.JWT_SECRET
} 
export default Envconfig;
