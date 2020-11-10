import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany,JoinColumn } from "typeorm";
import Users from './Users';
import Services_has_user from './Services_has_users';
import { Field, ID, ObjectType } from "type-graphql";


@Entity("services")
@ObjectType()
class Services {
  @Field(()=>ID)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({type:"float"})
  price: number;

  @Field()
  @Column()
  date:string;

  @Field()
  @Column()
  status: string;

  @Field()
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
