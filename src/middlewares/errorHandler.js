import EErrors from "../services/errors/enum.js";

function errorHandler (error, req, res, next) { 
    switch(error.code) {
        case EErrors.INVALID_TYPES_ERROR: ;
            req.logger.error(error.name);
            res.send({status: "error", error: error.name})
            break;
        case EErrors.ROUTING_ERROR:
            res.send({status: "error", error: error.name})
            req.logger.error(error.name);
            break;
        case EErrors.DATABASE_ERROR:
            res.send({status: "error", error: error.name})
            req.logger.error(error.name);
            break;
        default:
            req.logger.error("Error desconocido");
            res.send({status: "error", error: "Error desconocido"})
    }
}

export default errorHandler; 
