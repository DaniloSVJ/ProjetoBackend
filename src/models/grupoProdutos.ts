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

  @Entity('grupo_produtos')
  class GrupoProdutos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @OneToMany(() => Produto, produto =>produto.grupo) // Many GrupoProdutoss to a user
    produto: Produto;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


  }
  export default GrupoProdutos;
