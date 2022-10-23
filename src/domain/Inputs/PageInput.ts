import { Field, InputType } from 'type-graphql';


@InputType()
export default class PageInput {
    @Field()
    name: string;

    @Field({ nullable: true })
    url: string;

    @Field()
    portfolio_id: number;

}