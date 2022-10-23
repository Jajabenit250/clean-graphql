import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { CreatePortofolio } from '../../app/usecases/portofolio/Createportofolio';

import PortfolioEntity from '../../domain/entities/PortfolioEntity';
import PortfolioInput from '../../domain/Inputs/PortofolioInput';

@Resolver()
@Service()
export default class ListPortfoliosResolver {
  constructor(
    private readonly createPortofolio: CreatePortofolio,
  ) { }
  @Query(() => [PortfolioEntity], { description: 'Get all portofolios' })
  async listPortfolios(): Promise<PortfolioEntity[]> {
    const portfolioRepository = getRepository(PortfolioEntity);
    return portfolioRepository
      .createQueryBuilder('p')
      .getMany();
  }

  @Mutation(() => PortfolioEntity)
  async addPortofolio(@Arg("data") data: PortfolioInput) {
    return await this.createPortofolio.execute(data);
  }
}

