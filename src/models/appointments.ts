import {Entity,Column,ManyToOne, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, JoinColumn} from "typeorm"
import User from "./user";


@Entity('appointements')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    provider_id:string;

    @ManyToOne(()=>User)
    @JoinColumn({name: "provider_id"})
    provider:User;

    @Column('timestamp with time zone')
    date:Date;
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    update_at:Date;

    /*constructor({provider,date }: Omit<Appointment,"id"> ){
        this.id = uuid()        // ||
        this.date = date;       // L ====> está omitindo o id
        this.provider = provider
    } */
}

export default Appointment
