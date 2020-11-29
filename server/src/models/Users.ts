import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import Services from "./Services";
import Services_has_user from "./Services_has_users";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  avatar: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  telefone: string;

  @OneToMany(() => Services, (service) => service.user, {
    cascade: ["insert", "update"],
  })
  services: Services[];

  @OneToMany(
    () => Services_has_user,
    (services_has_user) => services_has_user.user_has_service,
    {
      cascade: ["insert", "update"],
    }
  )
  ServicesHasUser: Services_has_user[];
}

export default Users;
