import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn,OneToMany, CreateDateColumn, BaseEntity } from "typeorm";

import Services from './Services';
import Services_has_user from './Services_has_users';

@Entity("users")
@ObjectType()
class Users extends BaseEntity{
  @Field(()=>ID)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => Date)
  @CreateDateColumn()
  created_at: Date;

  @Field(() => String)
  @Column()
  dataNasci: string;

  @Field(() => String)
  @Column()
  cidade: string;

  @Field(() => String)
  @Column()
  rg: string;

  @Field(() => String)
  @Column()
  cpf: string;

  @Field(() => String)
  @Column()
  senha: string;

  @Field()
  @Column()
  celular: number;

  
  @OneToMany(() => Services, service => service.user,{
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
