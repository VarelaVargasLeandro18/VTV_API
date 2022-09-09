import {DataSource} from "typeorm";
import { Usuario } from "./models/Usuario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    entities: [
        Usuario
    ],
    synchronize: true,
    logging: false,
});