import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVenda1606704044230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'vendas',
                columns:[
                    {
                        name:'id',
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                        default: 'now()',

                    },

                    {
                        name:'funcionario',
                        type: 'varchar',
                    },

                    {
                        name:'id_cliente',
                        type: 'uuid',
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
                        name: 'foreignKeyCli',
                        columnNames:["id_cliente"],
                        referencedColumnNames:['id'],
                        referencedTableName:"clients",


                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("vendas","foreignKeyCli");
        await queryRunner.dropTable('vendas');
    }

}
