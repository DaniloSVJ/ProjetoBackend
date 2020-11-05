'strict'
import { Router} from "express"
import AuthenticateSessionService from '../service/AuthenticateSessionService'
const sessionsRoutes = Router()

//const appointments:Appointment[] = []

 sessionsRoutes.post('/', async (request,response)=>{
   try {
        const {email,password} = request.body;
        const authenticateUser = new AuthenticateSessionService()

        const {user,token}= await authenticateUser.execute({

            email,
            password

        })

        //delete user.email


        return response.send({user,token})

   } catch (err) {
        return response.status(400).json({error: err.message});

   }
})

export default sessionsRoutes;

