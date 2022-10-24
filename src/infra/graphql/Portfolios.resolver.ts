import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CreatePortofolio } from '../../app/usecases/portfolio/Createportofolio';
import { ListPortofolio } from '../../app/usecases/portfolio/ListPortofolios';

import PortfolioEntity from '../../domain/entities/PortfolioEntity';
import PortfolioInput from '../../domain/Inputs/PortofolioInput';

@Resolver()
@Service()
export default class PortfoliosResolver {
  constructor(
    private readonly createPortofolio: CreatePortofolio,
    private readonly listPortofolio: ListPortofolio,
  ) { }
  @Query(() => [PortfolioEntity], { description: 'Get all portofolios' })
  async listPortfolios(): Promise<PortfolioEntity[]> {
    return await this.listPortofolio.execute()
  }

  @Mutation(() => PortfolioEntity)
  async addPortofolio(@Arg("data") data: PortfolioInput) {
    return await this.createPortofolio.execute(data);
  }
}

