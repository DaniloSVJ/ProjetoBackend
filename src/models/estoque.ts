import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
    ManyToMany,
    JoinColumn,
  } from 'typeorm';

  import Produto from './produtos';

  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */

  @Entity('estoque')
  class Estoque {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    quantidade: number;

    @OneToMany(() => Produto, produto =>produto.grupo) // Many Estoques to a user
    produto: Produto;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


  }
  export default Estoque;
