import { Field, InputType } from 'type-graphql';

@InputType()
export default class PortfolioVersionInput {
    @Field()
    name: string;
}
