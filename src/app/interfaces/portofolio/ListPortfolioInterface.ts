import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { UseCase } from '../UseCase';


export interface ListPortofolioInterface
    extends UseCase<ListPortofolioInterface.Request, ListPortofolioInterface.Response> {
    execute(): Promise<ListPortofolioInterface.Response>;
}

export namespace ListPortofolioInterface {
    export type Request = string;
    export type Response = PortfolioEntity[];
}
