import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { UseCase } from '../UseCase';
import PortfolioInput from '../../../domain/Inputs/PortofolioInput'


export interface CreatePageInterface
    extends UseCase<CreatePageInterface.Request, CreatePageInterface.Response> {
    execute(portofolioData: CreatePageInterface.Request): Promise<CreatePageInterface.Response>;
}

export namespace CreatePageInterface {
    export type Request = Omit<PortfolioInput, ''>;
    export type Response = PortfolioEntity;
}
