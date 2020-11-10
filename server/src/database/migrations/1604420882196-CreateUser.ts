import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1604420882196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
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
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "telefone",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true,
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
