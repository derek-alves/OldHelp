import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateService1604420996184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "services",
              columns: [
                {
                  name: "id",
                  type: "integer",
                  unsigned: true,
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "title",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "description",
                  type: "varchar",
                  isNullable: false,
                },
                {
                  name: "price",
                  type: "integer",
                  isNullable: false,
                },
                {
                  name: "status",
                  type: "varchar",
                  isNullable: false,
                },
                {
                    name:'user_id',
                    type:'integer'
                }
              ],
      
              foreignKeys: [
                {
                  name: "UserService",
                  columnNames: ["user_id"],
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  onUpdate: "CASCADE",
                  onDelete: "CASCADE",
                },
              ],
            })
          );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services');
    }

}
