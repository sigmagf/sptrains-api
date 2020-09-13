import { PrismaClient } from '@prisma/client';

import { Operator } from '~/entities/Operator';

import { IOperatorsRepository } from './IOperatorsRepository';

export class PrismaOperatorsRepository implements IOperatorsRepository {
  private prisma = new PrismaClient();

  async save(data: Operator): Promise<Operator> {
    const operator = await this.prisma.operator.create({ data });

    return operator;
  }

  async find(id: string): Promise<Operator> {
    const operator = await this.prisma.operator.findOne({ where: { id } });

    return operator;
  }

  async list(): Promise<Operator[]> {
    const operators = await this.prisma.operator.findMany();

    return operators;
  }

  async update(id: string, data: Partial<Operator>): Promise<Operator> {
    const operator = await this.prisma.operator.update({ where: { id }, data });

    return operator;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.operator.delete({ where: { id } });
  }
}
