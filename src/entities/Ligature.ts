import { v4 } from 'uuid';

export class Ligature {
  public readonly id: string;

  public lineId: number;
  public stationId: string;
  public details: boolean;
  public next?: string;
  public previous?: string;

  constructor(props: Omit<Ligature, 'id'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = v4();
    }
  }
}
