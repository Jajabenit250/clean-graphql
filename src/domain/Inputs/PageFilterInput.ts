import { Field, InputType } from 'type-graphql';


@InputType()
export default class PageFilterInput {
    @Field()
    portfolio_id: number;

    @Field()
    portfolio_version_id: number;

}