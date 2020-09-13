import { Ligature } from '~/entities/Ligature';

export interface ILigaturesRepository {
  save(data: Ligature): Promise<Ligature>;
  findByLineAndStation(lineId: string, stationId: string): Promise<Ligature>;
  find(id: string): Promise<Ligature>;
  list(): Promise<Ligature[]>;
  listByLine(lineId: string): Promise<Ligature[]>;
  update(id: string, data: Partial<Ligature>): Promise<Ligature>;
  delete(id: string): Promise<void>;
}
