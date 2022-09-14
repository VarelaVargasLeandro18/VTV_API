import { DataSource } from "typeorm";
import { Auto } from "./models/Auto";
import { DocumentoIdentificador } from "./models/DocumentoIdentificador";
import { Estado } from "./models/Estado";
import { Inspeccion } from "./models/Inspeccion";
import { Inspector } from "./models/Inspector";
import { MarcaAuto } from "./models/MarcaAuto";
import { Medicion } from "./models/Medicion";
import { ModeloAuto } from "./models/ModeloAuto";
import { Observacion } from "./models/Observacion";
import { Propietario } from "./models/Propietario";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    entities: [
        Auto,
        DocumentoIdentificador,
        Estado,
        Inspeccion,
        Inspector,
        MarcaAuto,
        Medicion,
        ModeloAuto,
        Observacion,
        Propietario,
    ],
    synchronize: false,
    logging: false,
});