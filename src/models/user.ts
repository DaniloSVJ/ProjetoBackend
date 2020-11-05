import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"

interface AppointmentConstructor{
    provider:string,
    date:Date,
}

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    password:string;
    @CreateDateColumn()
    created_at:Date;
    @UpdateDateColumn()
    update_at:Date;

    /*constructor({provider,date }: Omit<User,"id"> ){
        this.id = uuid()        // ||
        this.date = date;       // L ====> está omitindo o id
        this.provider = provider
    } */
}

export default User
