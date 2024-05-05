import userModel from '../../../models/user.model.js'

export default class UserDao {
    async getAllUsers(){
        
        return await userModel.find()
    }

    async deleteUser(id){
        return await userModel.findByIdAndDelete(id)
    }

    async updateUser(id,user){
        return await userModel.findByIdAndUpdate(id, user)
    }
}