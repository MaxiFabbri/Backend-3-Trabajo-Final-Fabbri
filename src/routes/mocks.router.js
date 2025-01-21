import { Router } from 'express';
// import mokingUsers from '../utils/mokingUsers.util.js';
// import mokingPets from '../utils/mokingPets.util.js';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/', ()=>console.log("Mocking route"));
router.get('/mockingpets/:quantity?', mocksController.getMockingPets );
router.get('/mockingusers/:quantity?', mocksController.getMockingUsers );

export default router;