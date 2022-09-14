import { DataSource } from "typeorm";
import { Auto } from "./models/entities/Auto";
import { DocumentoIdentificador } from "./models/entities/DocumentoIdentificador";
import { Estado } from "./models/entities/Estado";
import { Inspeccion } from "./models/entities/Inspeccion";
import { Inspector } from "./models/entities/Inspector";
import { MarcaAuto } from "./models/entities/MarcaAuto";
import { Medicion } from "./models/entities/Medicion";
import { ModeloAuto } from "./models/entities/ModeloAuto";
import { Observacion } from "./models/entities/Observacion";
import { Propietario } from "./models/entities/Propietario";

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