import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';

 // import User from './user';

import Clients from './clients'
  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */
  @Entity('vendas')
  class Vendas {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    id_Cliente: string;

    @ManyToOne(() => Clients)
    @JoinColumn({ name: 'id_Cliente' })
    venda: Clients;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


  }
  export default Vendas;
