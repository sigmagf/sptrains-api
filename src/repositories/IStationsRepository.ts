import { Station } from '~/entities/Station';

export interface IStationsRepository {
  save(data: Station): Promise<Station>;
  find(id: string): Promise<Station>;
  list(): Promise<Station[]>;
  update(id: string, data: Partial<Station>): Promise<Station>;
  delete(id: string): Promise<void>;
}
