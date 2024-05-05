import {Router } from 'express'
import {usersList, deleteUsers, userUpdate} from '../controllers/users.controller.js'
const router = Router();

router.get('/', usersList )

router.delete('/', deleteUsers)
export default router

router.put('/', userUpdate)