import {MigrationExecutor, MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AlterProviderFieldProviderId1603913368890
implements MigrationInterface {
    //implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointements',"provider");
        await queryRunner.addColumn(
            'appointements',
            new TableColumn({
                name:'provider_id',
                type:"uuid",
                isNullable:true,
            })
        )
        await queryRunner.createForeignKey('appointements',
        new TableForeignKey(
        {
            name: "AppointProvider",
            columnNames:["provider_id"],
            referencedColumnNames:['id'],
            referencedTableName:"users",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.dropForeignKey("appointements","AppointProvider");
        await queryRunner.dropColumn("appointements","provider_id");
        await   queryRunner.addColumn("appointements", new
        TableColumn({
            name:'provider',
            type:"varchar",
            isNullable:false,
        }))

    }

}
