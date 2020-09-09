export interface ILine {
  id: string;
  number: number;
  name: string;
  color: string;
  active: boolean;
  stations: IStation[];
  operator: IOperator;
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

export interface IOperator {
  id: string;
  name: string;
  alias: string;
  lines: ILine[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IStatusResponse {
  LinhaId: number;
  Nome: string;
  Status: string;
  Descricao: string;
  Tipo: 'M'|'C'|'4'|'5';
  DataGeracao: Date;
}

export interface ILineStatus {
  id: number;
  name: string;
  status: string;
  details: string;
  type: 'M'|'C'|'4'|'5';
  updatedAt: Date;
}
