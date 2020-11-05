import Appointment from '../models/appointments';
import {EntityRepository,Repository} from "typeorm"


@EntityRepository(Appointment)
class AppontimentsRepository extends Repository<Appointment>{



    public async findByDate(date:Date):Promise<Appointment | null>{
        // const findAppointment = this.appointments.find(appointment=>
        //     isEqual(date, appointment.date)
        // )
        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null
    }


}

export default AppontimentsRepository
