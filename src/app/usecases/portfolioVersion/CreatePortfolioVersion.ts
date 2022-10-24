import { getRepository } from 'typeorm';
import { Service } from 'typedi';
import { CreatePortofolioVersionInterface } from '../../interfaces/portofolioVersion/CreatePortfolioVersionInterface';
import PortfolioVersionEntity from '../../../domain/entities/PortfolioVersionEntity';

@Service()
export class CreatePortofolioVersion implements CreatePortofolioVersionInterface {
    constructor(
        private readonly PortofolioVersionRepository = getRepository(PortfolioVersionEntity),
    ) { }

    async execute(portofolioVersionData: CreatePortofolioVersionInterface.Request): Promise<CreatePortofolioVersionInterface.Response> {
        return this.PortofolioVersionRepository.save(portofolioVersionData);
    }
}
