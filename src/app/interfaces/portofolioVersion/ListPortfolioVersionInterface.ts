import PortfolioVersionEntity from '../../../domain/entities/PortfolioVersionEntity';
import { UseCase } from '../UseCase';


export interface ListPortofolioVersionInterface
    extends UseCase<ListPortofolioVersionInterface.Request, ListPortofolioVersionInterface.Response> {
    execute(): Promise<ListPortofolioVersionInterface.Response>;
}

export namespace ListPortofolioVersionInterface {
    export type Request = string;
    export type Response = PortfolioVersionEntity[];
}
