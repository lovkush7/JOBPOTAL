import { DataSource } from "typeorm"
import Envconfig from "./Envconfig.ts"
import { fileURLToPath } from "node:url"
import { dirname } from "node:path"


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const AppDataSource = new DataSource({
    type: "postgres",
    host: Envconfig.DB_HOST!,
    port: +(Envconfig.DB_PORT!),
    username: Envconfig.DB_USER!,
    password: Envconfig.DB_PASSWORD!,
    database: Envconfig.DB_DATABASE!,
    entities: [
        __dirname + "./../entity/*.ts"
    ],
    logging: true,
    synchronize: true,

})

export default AppDataSource
