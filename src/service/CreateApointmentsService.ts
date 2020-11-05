import {startOfHour} from "date-fns"
import Appointment from '../models/appointments'
import AppointmentRespository from '../repositories/AppointimentsRepository'
import { getCustomRepository } from 'typeorm';



/**
 * Recebimento das informações
 * Tratativa de erro
 * Acesso ao repositorio
 */

 interface Request {
     date:Date;
     provider_id: string;
 }

class CreateAppointmentsService{

    public async execute({ date, provider_id }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppointmentRespository);

        const appointmentDate = startOfHour(date);


        const findAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
          );

            if (findAppointmentInSameDate) {
                throw Error('This appointment is already booked');
              }
            const appointment = appointmentsRepository.create({
                provider_id,
                date: appointmentDate,
              });

            await appointmentsRepository.save(appointment)


            return appointment
    }

}

export default CreateAppointmentsService
