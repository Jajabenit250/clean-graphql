import PortfolioEntity from '../../../domain/entities/PortfolioEntity';
import { UseCase } from '../UseCase';
import PortfolioInput from '../../../domain/Inputs/PortofolioInput'


export interface CreatePortofolioInterface
  extends UseCase<CreatePortofolioInterface.Request, CreatePortofolioInterface.Response> {
  execute(portofolioData: CreatePortofolioInterface.Request): Promise<CreatePortofolioInterface.Response>;
}

export namespace CreatePortofolioInterface {
  export type Request = Omit<PortfolioInput, ''>;
  export type Response = PortfolioEntity;
}
