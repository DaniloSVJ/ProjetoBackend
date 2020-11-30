import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    //ManyToOne,
    JoinColumn,
    OneToOne,
  } from 'typeorm';

  import Venda from './vendas';


  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */
  @Entity('items_vendas')
  class ItemVenda {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    qtdvendido: number;

    @Column('decimal')
    valor_vendido: number;

    @Column()
    id_vendas: string;

    @Column()
    id_produtos: string;

    @OneToOne(()=> Venda)
    @JoinColumn({name:'id_vendas'} )
    venda: Venda;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

  //  @OneToOne(() => User) // Many ItemVendas to a user
   // @JoinColumn({ name: 'provider_id' }) // The column that will identify the provider
    //provider: User;

    // @Column('timestamp with time zone')
    // date: Date;

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;
  }
  export default ItemVenda;
