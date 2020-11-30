import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateFormaPagamentoVenda1606179721843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'forma_pagamento_venda',
                    columns:[
                        {
                            name:'id',
                            type:'uuid',
                            isPrimary: true,
                            generationStrategy:'uuid',
                            default:'uuid_generate_v4()'

                        },
                        {
                            name:'valor',
                            type: 'decimal',
                            precision: 10,
                            scale: 2,
                        },
                        {
                            name:'id_venda',
                            type:'uuid',
                        },
                        {
                            name:'id_forma_pagmet',
                            type:'uuid',
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            default: 'now()',
                        },


                    ],
                    foreignKeys: [
                        {
                            name: 'foreignKeyV',
                            referencedTableName: 'vendas',
                            referencedColumnNames: ['id'],
                            columnNames:['id_venda'],
                            onDelete: 'SET NULL',
                            onUpdate: 'CASCADE',

                        },
                        {

                            name: 'foreignKeyForma',
                            referencedTableName: 'forma_pagamento',
                            referencedColumnNames: ['id'],
                            columnNames: ['id_forma_pagmet'],
                            onDelete: 'SET NULL',
                            onUpdate: 'CASCADE',

                        }
                    ]

                })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.dropForeignKey("forma_pagamento_venda","foreignKeyV");
        await  queryRunner.dropForeignKey("forma_pagamento_venda","foreignKeyForma");
        await queryRunner.dropTable('forma_pagamento');
    }

    }
