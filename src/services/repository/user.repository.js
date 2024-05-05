export default class UserRepository{
    constructor(dao){
        this.dao = dao
    }

    getAllUsers = () =>{
        
        return this.dao.getAllUsers()
    }

    deleteUser = (id) =>{
        return this.dao.deleteUser(id)
    }

    updateUser = (id,user) =>{
        return this.dao.updateUser(id, user)
    }
}