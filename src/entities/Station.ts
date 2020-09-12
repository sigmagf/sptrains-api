import { v4 } from 'uuid';

export class Station {
  public readonly id: string;

  public displayName: string;
  public fullName: string;
  public elevator: boolean;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: Pick<Station, 'displayName'|'fullName'|'elevator'>, id?: string) {
    Object.assign(this, props);

    if(!id) {
      this.id = v4();
    }
  }
}
