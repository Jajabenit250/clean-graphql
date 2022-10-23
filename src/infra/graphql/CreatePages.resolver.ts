import { Arg, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CreatePage } from '../../app/usecases/page/CreatePage';
import PageEntity from '../../domain/entities/PageEntity';
import PageInput from '../../domain/Inputs/PageInput';

@Resolver()
@Service()
export default class CreatePagesResolver {
    constructor(
        private readonly createPage: CreatePage,
    ) { }

    @Mutation(() => PageEntity)
    async addPages(@Arg("data") data: PageInput) {
        return await this.createPage.execute(data);
    }
}

