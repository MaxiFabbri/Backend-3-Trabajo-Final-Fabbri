export const generateUserErrorInfo = (user) => {
    return `Los datos estan incompletos o no son validos. 
    Necesitamos recibir los siguientes datos: 
    - Nombre: String, pero recibimos ${user.first_name}
    - Apellido: String, peeero recibimos ${user.last_name}
    - Email: String, recibimos ${user.email}
    `
}

export const generateDataBaseError = (data) => {
    return `Error al intentar guardar la informacion en la DB: 
    enviamos: ${data.stringValue} 
    y esperabamos el tipo: ${data.kind}
    `
}
