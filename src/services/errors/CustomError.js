//Creamos una clase para generar nuestros propios errores: 

class CustomError {
    static createError({name = "Error", cause, message, code = 1}) {
        const error = new Error(message);
        error.name = name; 
        error.causa = cause; 
        error.code = code; 
        throw error;
        //Lanzamos el error, esto detiene la aplicacion por eso debemos capturarlo en el otro módulo. 
    }
}

export default CustomError; 