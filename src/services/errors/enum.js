export const EErrors = {
    RUTA_ERROR: 1, 
    TIPO_INVALIDO: 2, 
    BD_ERROR: 3
}

// responses = (req, res, next) => {
//     // success
//     res.json200 = (response, message) =>
//         res.status(200).json({ response, message });
//     // Created
//     res.json201 = (response, message) =>
//         res.status(201).json({ response, message });
//     // 204 No content
//     // 400 Bad request
//     res.json400 = (message) => res.status(400).json({ error: message });
//     // 401 Unauthorized
//     res.json401 = () => res.status(401).json({ error: "Bad Auth!" });
//     // 403 Forbidden
//     res.json403 = () => res.status(403).json({ error: "Forbidden!" });
//     // 404 Not found
//     res.json404 = () => res.status(404).json({ error: "Not found!" });
//     return next();
//   };