import { v4 } from 'uuid';

export class Operator {
  public readonly id: string;

  public name: string;
  public alias: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: Pick<Operator, 'name'|'alias'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = v4();
    }
  }
}
