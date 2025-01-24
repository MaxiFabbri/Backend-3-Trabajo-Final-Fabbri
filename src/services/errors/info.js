export const generarInfoError = (usuario) => {
    return `Los datos estan incompletos o no son validos. 
    Necesitamos recibir los siguientes datos: 
    - Nombre: String, pero recibimos ${usuario.nombre}
    - Apellido: String, peeero recibimos ${usuario.apellido}
    - Email: String, recibimos ${usuario.email}
    `
}
export const generarDbError = (data) => {
    return `Error al intentar guardar la informacion en la DB: 
    enviamos: ${data.stringValue} 
    y esperabamos el tipo: ${data.kind}
    `
}
