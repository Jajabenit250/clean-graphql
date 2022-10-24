import { UseCase } from '../UseCase';
import PortfolioVersionInput from '../../../domain/Inputs/PortfolioVersionInput'
import PortfolioVersionEntity from '../../../domain/entities/PortfolioVersionEntity';


export interface CreatePortofolioVersionInterface
  extends UseCase<CreatePortofolioVersionInterface.Request, CreatePortofolioVersionInterface.Response> {
  execute(portofolioData: CreatePortofolioVersionInterface.Request): Promise<CreatePortofolioVersionInterface.Response>;
}

export namespace CreatePortofolioVersionInterface {
  export type Request = Omit<PortfolioVersionInput, ''>;
  export type Response = PortfolioVersionEntity;
}
