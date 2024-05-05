import {userService} from '../services/services.js'
import UserDto from '../services/DTOs/user.dto.js'; 
import { sendDeletedUserMail } from "../utils/nodeMailer.js"
export const usersList = async(req,res) =>{
    try{
        let userList = await userService.getAllUsers()
        let dtoUsers = userList.map(element => {
             return new UserDto(element)
        });
        
        res.status(200).send( dtoUsers )
    }catch(err){
        res.status(500).json({error:err})
    }
}

export const deleteUsers = async( req,res) =>{
    try{
    let userList = await userService.getAllUsers()
    let deletedUsers = userList.map(element =>{
        if(element.lastConnection < Date.now()- 172800000){
            sendDeletedUserMail(element.email)
            let deletedUser = userService.deleteUser(element._id)
            return deletedUser
        }
    })
    res.status(200).json(deletedUsers)
    }catch(err){
        res.status(500).json({error:err})
    }
}

export const userUpdate = async (req,res) =>{
    
    console.log(req.body)
    try{
        const { index, user} = req.body;
        let userList = await userService.getAllUsers()
        let id = userList[index]._id

        let update = await userService.updateUser(id,user)

        res.status(200).json({message:'ok'})
    }catch(err){    
        res.status(500).json({error:err})
    }

}