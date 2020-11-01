import { Entity, Column, PrimaryGeneratedColumn, JoinColumn,OneToMany } from "typeorm";
import Services from './Services';
import Services_has_user from './Services_has_users';

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

  @OneToMany(()=>Services, service => service.user,{
    cascade:['insert','update']
  })
  @JoinColumn({name:'user_id'})
  services:Services;

  @OneToMany(()=>Services_has_user, services_has_user => services_has_user.user_has_service,{
    cascade:['insert','update']
  })
  @JoinColumn({name:'user_id'})
  services_has_user:Services_has_user;
}

export default Users;