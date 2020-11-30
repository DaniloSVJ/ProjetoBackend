import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateClients1606329087781

implements MigrationInterface {

    public  async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
                new Table({
                name:'clients',
                columns: [
                    {
                        name:'id',
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',

                    },
                    {
                        name:"nome",
                        type: 'varchar',

                    },
                    {
                        name: 'bairro',
                        type: 'varchar',
                    },
                    {
                        name:'cep',
                        type: 'varchar'
                    },
                    {

                        name: 'cidade',
                        type: 'varchar',

                    },
                    {
                        name: 'uf',
                        type:'varchar'
                    },
                    {
                        name: 'telefone',
                        type: 'varchar'
                    },
                    {
                        name: 'CPF',
                        type: 'varchar',
                    },
                    {
                        name: 'RG',
                        type: 'varchar'
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

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")
    }

}
