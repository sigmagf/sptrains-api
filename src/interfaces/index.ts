export interface ILine {
  id: string;
  number: number;
  name: string;
  color: string;
  active: boolean;
  stations: IStation[];
  company: ICompany;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IStation {
  id: string;
  displanyName: string;
  fullName: string;
  elevator: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICompany {
  id: string;
  name: string;
  alias: string;
  lines: ILine[];
  createdAt?: Date;
  updatedAt?: Date;
}
