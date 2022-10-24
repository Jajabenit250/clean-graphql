import { getRepository } from 'typeorm';
import { Service } from 'typedi';
import { ListPageInterface } from '../../interfaces/page/ListPageInterface';
import PageEntity from '../../../domain/entities/PageEntity';

@Service()
export class ListPages implements ListPageInterface {
    constructor(
        private readonly PageRepository = getRepository(PageEntity),
    ) { }

    // list pages by portfolio and portfolio ID
    async execute(data: ListPageInterface.Request): Promise<ListPageInterface.Response> {
        // find and return page with specific version id and portfolio id
        return await this.PageRepository.find({
            relations: ['portfolio', 'portfolioVersion'],
            where: {
                portfolio: {
                    id: data.portfolio_id,
                },
                portfolioVersion: {
                    id: data.portfolio_version_id,
                }
            },
        });
    }
}
