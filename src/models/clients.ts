import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    //ManyToOne,
    JoinColumn,
  } from 'typeorm';

 // import User from './user';


  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */
  @Entity('clients')
  class Clientes {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column()
    bairro: string;

    @Column()
    cep: string;

    @Column()
    cidade: string;

    @Column()
    uf: string;

    @Column()
    telefone: string;

    @Column()
    CPF: string;

    @Column()
    RG: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

  //  @OneToOne(() => User) // Many appointments to a user
   // @JoinColumn({ name: 'provider_id' }) // The column that will identify the provider
    //provider: User;

    // @Column('timestamp with time zone')
    // date: Date;

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;
  }
  export default Clientes;
