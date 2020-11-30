import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';

  import GrupoProduto from './grupoProdutos';
  import Estoque from './estoque'

  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */
  @Entity('produtos')
  class Produtos {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    codigo: string;

    @Column()
    nome: string;

    @Column()
    imagem: string;

    @Column('decimal')
    custo: number;

    @Column('decimal')
    valor_venda: number;

    @Column()
    id_grupo: string;

    // @OneToOne(() => Grupo) // Many Produtoss to a user
    // @JoinColumn({ name: 'id_grupo' })
    // grupo: Grupo
    @ManyToOne(() => GrupoProduto, grupo=> grupo.produto, { eager: true })
    @JoinColumn({ name: 'id_grupo' })
    grupo: GrupoProduto;

    // @ManyToOne(() => Estoque, estoque=> estoque.id, { eager: true })
    // estoque: Estoque;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
  //  @OneToOne(() => User) // Many Produtoss to a user
   // @JoinColumn({ name: 'provider_id' }) // The column that will identify the provider
    //provider: User;

    // @Column('timestamp with time zone')
    // date: Date;

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;
  }
  export default Produtos;
