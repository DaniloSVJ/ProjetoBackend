import { Router} from "express"
import {parseISO} from "date-fns"
import {getCustomRepository} from "typeorm"
import appointment from '../models/appointments'
import AppointmentsRepository from '../repositories//AppointimentsRepository'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import CreateAppointmentsService from "../service/CreateApointmentsService"


const appointmentsRouter = Router()
//appointmentsRouter.use(ensureAuthenticated);
//const appointments:Appointment[] = []

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();
  return response.json(appointments)
})/*
appointmentsRouter.get('/', async (request,response)=>{
    const appointmentsRepository =  getCustomRepository(AppointmentsRepository)
    const appointment = await appointmentsRepository.find()
    return response.json(appointment)
})*/
 appointmentsRouter.post('/', async (request,response)=>{
   try {
    const {provider_id,date} = request.body;
    //const appointmentRespository = getCustomRepository(AppointmentRespository)

    const parseDate = parseISO(date)

    const createAppointment = new CreateAppointmentsService()

    const appointment = await createAppointment.execute({
        date:parseDate,
        provider_id})
    return response.json(appointment)
    } catch (err) {
        return response.status(400).json({error: err.message});

    }
})

export default appointmentsRouter;

