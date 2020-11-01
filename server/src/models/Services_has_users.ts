import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Users from "./Users";
import Services from './Services';

@Entity("services_has_users")
class ServicesHasUsers {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({type:"float"})
  value: number;

 
  @Column("timestamp with time zone")
  date: Date;

  @Column()
  status: string;

  @Column()
  user_id:string;

  @Column()
  service_id:number;

  @ManyToOne(()=>Users, user => user.services_has_user)
  @JoinColumn({name:'user_id'})
  user_has_service:Users;

  @ManyToOne(()=>Services, services => services.services)
  @JoinColumn({name:'service_id'})
  service:Services;
}

export default ServicesHasUsers;
