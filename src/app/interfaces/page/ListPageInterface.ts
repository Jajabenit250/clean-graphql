import PageEntity from '../../../domain/entities/PageEntity';
import PageInput from '../../../domain/Inputs/PageInput';
import { UseCase } from '../UseCase';


export interface ListPageInterface
    extends UseCase<ListPageInterface.Request, ListPageInterface.Response> {
    execute(data: ListPageInterface.Request): Promise<ListPageInterface.Response>;
}

export namespace ListPageInterface {
    export type Request = Omit<PageInput, 'name' | 'url'>;
    export type Response = PageEntity[];
}
