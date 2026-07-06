import express from 'express'
import { createPassword,  deletepassword,  getpassword, updatepassword, } from '../controller/PasswordController.js'

const router = express.Router()

router.get('/', getpassword)
router.post('/', createPassword)
router.put('/:id', updatepassword)
router.delete('/:id', deletepassword)


export default router
