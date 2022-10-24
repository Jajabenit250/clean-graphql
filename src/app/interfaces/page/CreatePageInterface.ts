import PageInput from '../../../domain/Inputs/PageInput';
import { UseCase } from '../UseCase';
import PageEntity from '../../../domain/entities/PageEntity';

export interface CreatePageInterface
    extends UseCase<CreatePageInterface.Request, CreatePageInterface.Response> {
    execute(pageData: CreatePageInterface.Request): Promise<CreatePageInterface.Response>;
}

export namespace CreatePageInterface {
    export type Request = Omit<PageInput, ''>;
    export type Response = PageEntity;
}
