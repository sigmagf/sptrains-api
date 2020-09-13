import { v4 } from 'uuid';

export class Ligature {
  public readonly id: string;

  public lineId: string;
  public stationId: string;
  public nextId?: string;
  public previousId?: string;
  public details?: string;

  constructor(props: Omit<Ligature, 'id'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = v4();
    }
  }
}
