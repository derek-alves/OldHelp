import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany,JoinColumn } from "typeorm";
import Users from './Users';
import Services_has_user from './Services_has_users';


@Entity("services")
class Services {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({type:"float"})
  price: number;

  @Column()
  status: string;

  @Column()
  user_id:number;

  @ManyToOne(()=> Users,user => user.services)
  @JoinColumn({name:'user_id'})
  user:Users;

  @OneToMany(()=>Services_has_user, services_has_user => services_has_user.services,{
    cascade:['insert','update']
  })
  @JoinColumn({name:'service_id'})
  services:Services_has_user;
}

export default Services;
