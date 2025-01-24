import { Router } from 'express';
import mocksController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/', ()=>console.log("Mocking route"));
router.get('/mockingpets/:quantity?', mocksController.getMockingPets );
router.get('/mockingusers/:quantity?', mocksController.getMockingUsers );
router.post('/generateData', mocksController.generateData );

export default router;