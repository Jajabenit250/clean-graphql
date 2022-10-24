import { getRepository } from 'typeorm';
import { Service } from 'typedi';
import { ListPortofolioVersionInterface } from '../../interfaces/portofolioVersion/ListPortfolioVersionInterface';
import PortfolioVersionEntity from '../../../domain/entities/PortfolioVersionEntity';

@Service()
export class ListPortofolioVerion implements ListPortofolioVersionInterface {
    constructor(
        private readonly PortofolioVersionRepository = getRepository(PortfolioVersionEntity),
    ) { }

    async execute(): Promise<ListPortofolioVersionInterface.Response> {
        return this.PortofolioVersionRepository
            .createQueryBuilder('p')
            .getMany();
    }
}
