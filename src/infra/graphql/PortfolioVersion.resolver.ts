import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CreatePortofolioVersion } from '../../app/usecases/portfolioVersion/CreatePortfolioVersion';
import { ListPortofolioVerion } from '../../app/usecases/portfolioVersion/ListPortfolioVersion';
import PortfolioVersionEntity from '../../domain/entities/PortfolioVersionEntity';
import PortfolioVersionInput from '../../domain/Inputs/PortfolioVersionInput';

@Resolver()
@Service()
export default class PortfoliosResolver {
    constructor(
        private readonly createPortofolioVersion: CreatePortofolioVersion,
        private readonly listPortofolioVersion: ListPortofolioVerion,
    ) { }
    @Query(() => [PortfolioVersionEntity], { description: 'Get all portofolios Version' })
    async listPortfolioVersions(): Promise<PortfolioVersionEntity[]> {
        return await this.listPortofolioVersion.execute()
    }

    @Mutation(() => PortfolioVersionEntity)
    async addPortofolioVersion(@Arg("data") data: PortfolioVersionInput) {
        return await this.createPortofolioVersion.execute(data);
    }
}

