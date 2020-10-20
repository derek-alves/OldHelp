import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column("timestamp with time zone")
  data: Date;

  @Column("date")
  dataNasci: Date;

  @Column()
  cidade: string;

  @Column()
  rg: string;

  @Column()
  cpf: string;

  @Column()
  senha: string;

  @Column("integer")
  celular: number;
}

export default Users;
