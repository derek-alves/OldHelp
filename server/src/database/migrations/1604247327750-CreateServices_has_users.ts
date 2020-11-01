import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateServicesHasUsers1604247327750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "services_has_users",
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
            name: "status",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "user_id",
            type: "varchar",
          },
          {
            name: "service_id",
            type: "integer",
          },
        ],
        foreignKeys: [
          {
            name: "User_in_service",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          {
            name: "Service",
            columnNames: ["service_id"],
            referencedTableName: "services",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('services_has_users');
  }
}
