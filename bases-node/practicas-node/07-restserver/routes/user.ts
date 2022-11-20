const { Router } = require('express');
import { Response, Request } from 'express';
import { userDelete, userPost, userPut, usersGet } from '../controllers';

const router = Router();


router.get('/', usersGet);

router.put('/:id', userPut)

router.post('/', userPost)

router.delete('/', userDelete)


module.exports = router