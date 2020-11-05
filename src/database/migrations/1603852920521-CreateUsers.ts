import {MigrationInterface,Table, QueryRunner} from "typeorm";

export default class CreateUsers1603852920521 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name:"id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy:"uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name:'name',
                        type:"varchar",
                       // isNullable:false,
                    },
                    {
                        name:"email",
                        type:"varchar",
                        isUnique:true // vai ser unico

                    },

                    {
                        name:"password",
                        type:"varchar",


                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:'now()'

                    },
                    {
                        name:"update_at",
                        type:"timestamp",
                        default:'now()'

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }
}
