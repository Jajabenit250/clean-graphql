import { Arg, Mutation, Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';
import { CreatePage } from '../../app/usecases/page/CreatePage';
import { ListPages } from '../../app/usecases/page/ListPages';
import PageEntity from '../../domain/entities/PageEntity';
import PageFilterInput from '../../domain/Inputs/PageFilterInput';
import PageInput from '../../domain/Inputs/PageInput';

@Resolver()
@Service()
export default class PagesResolver {
    constructor(
        private readonly createPage: CreatePage,
        private readonly listPage: ListPages,
    ) { }

    @Query(() => [PageEntity], { description: 'Get all pages by portfolio id & version id' })
    async listPages(@Arg("dataInput") dataInput: PageFilterInput): Promise<PageEntity[]> {
        return await this.listPage.execute(dataInput);
    }

    @Mutation(() => PageEntity)
    async addPages(@Arg("data") data: PageInput) {
        return await this.createPage.execute(data);
    }
}

