import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

// prueba de error
// router.get('/', (req, res, next) => {
//     return CustomError.crearError({
//         nombre: "petError",
//         causa: generarDbError( error.errors.adopted ),
//         mensaje: "Error al intentar crear un Pet",
//         codigo: 3
//     })
// });
router.get('/',usersController.getAllUsers);

router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);


export default router;