'strict'
import { Router} from "express"
import AuthenticateSessionService from '../service/AuthenticateSessionService'
const sessionsRoutes = Router()

//const appointments:Appointment[] = []

 sessionsRoutes.post('/', async (request,response)=>{

    const {email,password} = request.body;
    const authenticateUser = new AuthenticateSessionService()

    const {user,token}= await authenticateUser.execute({

        email,
        password

    })

    //delete user.email


    //return response.json({user,token})


})

export default sessionsRoutes;

