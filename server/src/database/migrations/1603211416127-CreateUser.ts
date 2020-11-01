import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1603211416127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default:'uuid_generate_v4()',
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "data",
            type: "timestamp with time zone",
            isNullable: false,
          },
          {
             name:"dataNasci",
             type:"varchar",
             isNullable:false 
          },
          {
            name:"cidade",
            type:"varchar",
            isNullable:false 
         },
         {
            name:"rg",
            type:"varchar",
            isNullable:false 
         },
         {
            name:"cpf",
            type:"varchar",
            isNullable:false 
         },
         {
            name:"senha",
            type:"varchar",
            isNullable:false 
         },
         {
            name:"celular",
            type:"integer",
            isNullable:false 
         },
         
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
