import { CreatePageInterface } from '../../interfaces/page/CreatePageInterface';
import { getRepository } from 'typeorm';
import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { Service } from 'typedi';
import PageEntity from '../../../domain/entities/PageEntity';
import PortfolioVersionEntity from '../../../domain/entities/PortfolioVersionEntity';

@Service()
export class CreatePage implements CreatePageInterface {
    constructor(
        private readonly portofolioRepository = getRepository(PortfolioEntity),
        private readonly pageRepository = getRepository(PageEntity),
        private readonly portofolioVersionRepository = getRepository(PortfolioVersionEntity),
    ) { }

    // saving a new page with version attached
    async execute(pageData: CreatePageInterface.Request): Promise<CreatePageInterface.Response> {

        // find portfolio by id
        const portfolio: PortfolioEntity | undefined = await this.portofolioRepository.findOne(pageData.portfolio_id);

        // find portfolio version by id
        const portfolioVersion: PortfolioVersionEntity | undefined = await this.portofolioVersionRepository.findOne(pageData.portfolio_version_id);

        // create and save page datas in the database
        return await this.pageRepository.save({ name: pageData.name, url: pageData.url, portfolio, portfolioVersion });
    }
}
