'strict'
import { Router} from "express"
import CreateUserService from '../service/CreateUserService'
const userRoutes = Router()

//const appointments:Appointment[] = []

 userRoutes.post('/', async (request,response)=>{
   try {

        const{name,email,password} = request.body

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        })

        //delete user.email

        return response.send(user)

   } catch (err) {
        return response.status(400).json({error: err.message});

   }
})

export default userRoutes;

