import { CreatePageInterface } from '../../interfaces/page/CreatePageInterface';
import { getRepository } from 'typeorm';
import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { Service } from 'typedi';

@Service()
export class CreatePage implements CreatePageInterface {
    constructor(
        private readonly createPortofolioRepository = getRepository(PortfolioEntity),
    ) { }

    async execute(portofolioData: CreatePageInterface.Request): Promise<CreatePageInterface.Response> {
        return this.createPortofolioRepository.save(portofolioData);
    }
}
