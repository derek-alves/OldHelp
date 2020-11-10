import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn,OneToMany, CreateDateColumn, BaseEntity } from "typeorm";

@Entity("teste")
@ObjectType()
class Teste extends BaseEntity{
  @Field(()=>ID)
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field(() => String)
  @Column()
  teste: string;

}
export default Teste;
