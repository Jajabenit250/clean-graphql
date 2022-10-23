import { CreatePortofolioInterface } from '../../interfaces/portofolio/CreatePostInterface';
import { getRepository } from 'typeorm';
import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { Service } from 'typedi';

@Service()
export class CreatePortofolio implements CreatePortofolioInterface {
    constructor(
        private readonly createPortofolioRepository = getRepository(PortfolioEntity),
    ) { }

    async execute(portofolioData: CreatePortofolioInterface.Request): Promise<CreatePortofolioInterface.Response> {
        return this.createPortofolioRepository.save(portofolioData);
    }
}
