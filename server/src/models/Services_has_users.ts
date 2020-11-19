import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Users from "./Users";
import Services from './Services';

@Entity("ServicesHasUsers")
class ServicesHasUsers {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  status: string;

  @Column()
  user_id:number;

  @Column()
  service_id:number;

  @ManyToOne(()=>Users, user => user.ServicesHasUser)
  @JoinColumn({name:'user_id'})
  user_has_service:Users;

  @ManyToOne(()=>Services, services => services.services)
  @JoinColumn({name:'service_id'})
  services:Services;
}

export default ServicesHasUsers;
