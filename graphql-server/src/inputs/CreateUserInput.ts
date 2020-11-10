import {InputType,Field} from 'type-graphql';

@InputType()
export class CreateUserInput{
  @Field()
  name:string;

  @Field()
  email:string;

  @Field()
  dataNasci:string;

  @Field()
  cidade:string;

  @Field()
  rg:string;

  @Field()
  cpf:string;

  @Field()
  senha:string;

  @Field()
  celular:number;

}