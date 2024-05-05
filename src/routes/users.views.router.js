import {Router } from 'express'
import UserDto from '../services/DTOs/user.dto.js'; 
import { userService } from '../services/services.js';
const router = Router();

router.get("/login", (req,res)=>{
    res.render('login')
})

router.get("/register", (req,res)=>{
    res.render('register')
})

router.get("/current", (req,res)=>{
    res.render('profile', {user:new UserDto(req.session.user)})
})

router.get('/userList', async (req,res)=>{
    if(req.session.user.rol == 'admin'){
        const users = await userService.getAllUsers()

    res.render('users', {users})
   }
    else{
        res.render("denied")
    }

})

export default router

