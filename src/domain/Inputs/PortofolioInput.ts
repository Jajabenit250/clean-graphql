import { Field, InputType } from 'type-graphql';

@InputType()
export default class PortfolioInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    url: string;

}