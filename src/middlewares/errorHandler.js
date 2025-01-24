import { EErrors } from "../services/errors/enum.js";

function errorHandler (error, req, res, next) {
    console.log("***** Error Handler: ", error.causa, "Error code: ", error.code, " *****"); 
    switch(error.code) {
        case EErrors.TIPO_INVALIDO: 
            res.send({status: "error", error: error.nombre})
            break;
        case EErrors.RUTA_ERROR:
            res.send({status: "error", error: error.nombre})
            break;
        case EErrors.BD_ERROR:
            res.send({status: "error", error: error.nombre})
            break;
        default: 
            res.send({status: "error", error: "Error desconocido"})
    }
}

export default errorHandler; 
