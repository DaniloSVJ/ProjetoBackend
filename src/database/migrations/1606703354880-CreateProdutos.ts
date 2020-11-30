import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProdutos1606703354880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'produtos',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name:'codigo',
                        type: 'varchar'
                    },

                    {
                        name: 'nome',
                        type: 'varchar',

                    },
                    {
                        name: 'custo',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name: 'valor_venda',
                        type: 'decimal',
                        precision: 10,
                        scale: 2,
                    },
                    {
                        name:'id_grupo',
                        type: 'uuid'
                    },
                    {
                        name: 'imagem',
                        type: 'varchar',
                        isNullable:true
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
                foreignKeys:[
                    {
                        name: 'foreignKeygrup',
                        referencedTableName: 'grupo_produtos',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_grupo'],
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },



                ],

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("produtos","foreignKeygrup");
        await queryRunner.dropTable('produtos')
    }

}

