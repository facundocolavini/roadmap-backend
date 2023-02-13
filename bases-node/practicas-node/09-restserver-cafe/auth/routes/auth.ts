import { Router } from 'express';
import { check } from 'express-validator';

import { login } from '../controller/auth.controller';
import { validateFields } from '../../middlewares/validatort';
const router = Router()

router.post('/login',[
    check('email','Email is required').isEmail(),
    check('password','Password is required').not().isEmpty(),
    validateFields
], login)



module.exports = router;