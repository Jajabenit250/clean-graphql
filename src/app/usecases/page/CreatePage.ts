import { CreatePageInterface } from '../../interfaces/page/CreatePageInterface';
import { getRepository } from 'typeorm';
import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { Service } from 'typedi';
import PageEntity from '../../../domain/entities/PageEntity';

@Service()
export class CreatePage implements CreatePageInterface {
    constructor(
        private readonly portofolioRepository = getRepository(PortfolioEntity),
        private readonly pageRepository = getRepository(PageEntity),
    ) { }

    async execute(pageData: CreatePageInterface.Request): Promise<CreatePageInterface.Response> {
        const portfolio: any = this.portofolioRepository.findOne(pageData.portfolio_id);
        return this.pageRepository.create({ name: pageData.name, url: pageData.url, portfolio });
    }
}
