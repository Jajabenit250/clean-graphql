import { ListPortofolioInterface } from '../../interfaces/portofolio/ListPortfolioInterface';
import { getRepository } from 'typeorm';
import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { Service } from 'typedi';

@Service()
export class ListPortofolio implements ListPortofolioInterface {
    constructor(
        private readonly PortofolioRepository = getRepository(PortfolioEntity),
    ) { }

    async execute(): Promise<ListPortofolioInterface.Response> {
        return this.PortofolioRepository
            .createQueryBuilder('p')
            .getMany();
    }
}
