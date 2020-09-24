import { v4 } from 'uuid';

export class Line {
  public readonly id: string;

  public number: number;
  public name: string;
  public active: boolean;
  public operatorId: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: Pick<Line, 'number'|'name'|'active'|'operatorId'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = v4();
    }
  }
}
