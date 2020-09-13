import { Operator } from '~/entities/Operator';

export interface IOperatorsRepository {
  save(data: Operator): Promise<Operator>;
  find(id: string): Promise<Operator>;
  list(): Promise<Operator[]>;
  update(id: string, data: Partial<Operator>): Promise<Operator>;
  delete(id: string): Promise<void>;
}
