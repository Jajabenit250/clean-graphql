import PageInput from '../../../domain/Inputs/PageInput';
import { UseCase } from '../UseCase';
import PortfolioEntity from '../../../domain/entities/PortfolioEntity';

export interface CreatePageInterface
    extends UseCase<CreatePageInterface.Request, CreatePageInterface.Response> {
    execute(portofolioData: CreatePageInterface.Request): Promise<CreatePageInterface.Response>;
}

export namespace CreatePageInterface {
    export type Request = Omit<PageInput, ''>;
    export type Response = IRequest;
}

interface IRequest {
    name: string;
    url: string;
    portfolio: PortfolioEntity;
}