// import { Router} from "express"
// import {parseISO} from "date-fns"
// import {getCustomRepository} from "typeorm"
// //import appointment from '../models/appointments'
// import AppointmentsRepository from '../repositories/AppointimentsRepository'

// //import ensureAuthenticated from '../middlewares/ensureAuthenticated'
// import CreateAppointmentsService from "../service/CreateApointmentsService"


// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// const appointmentsRouter = Router();

// appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//     const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//     const appointments = await appointmentsRepository.find();

//     return response.json(appointments);
// });


// appointmentsRouter.post('/', async (request,response)=>{

//     const {provider_id,date} = request.body;
//     //const appointmentRespository = getCustomRepository(AppointmentRespository)

//     const parseDate = parseISO(date)

//     const createAppointment = new CreateAppointmentsService()

//     const appointment = await createAppointment.execute({
//         date:parseDate,
//         provider_id})
//     return response.json(appointment)

// })

// export default appointmentsRouter;

