import { Line } from '~/entities/Line';

export interface ILinesRepository {
  save(data: Line): Promise<Line>;
  findByNumber(number: number): Promise<Line>;
  find(id: string): Promise<Line>;
  list(): Promise<Line[]>;
  update(id: string, data: Partial<Line>): Promise<Line>;
  delete(id: string): Promise<void>;
}
