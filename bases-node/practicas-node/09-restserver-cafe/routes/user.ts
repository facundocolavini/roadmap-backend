const { Router } = require('express');
import { check } from 'express-validator';

import { validateFields } from '../middlewares';
import { roleValidate,emailExist,userExistById } from '../helpers/db-validators';

import { userDelete, userGet, userPost, userPut } from '../controller';

const router = Router();


router.get('/', userGet);

router.put('/:id',[
    check('id', 'Its not a valid id').isMongoId(),
    check('id').custom(userExistById),
    check('rol').custom(roleValidate),
    validateFields
],
userPut)

router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('password','Password must contain 6 character').isLength({min:6}),
    check('email','Email is invalid').isEmail(),
    check('email').custom(emailExist),
    // check('rol','Its not valid rol').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(roleValidate),
    validateFields
]
, userPost)

router.delete('/:id',[
    check('id', 'Its not a valid id').isMongoId(),
    check('id').custom(userExistById),
    validateFields
], userDelete)

module.exports = router