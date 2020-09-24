import { PrismaClient } from '@prisma/client';

import { Line } from '~/entities/Line';

import { ILinesRepository } from './ILinesRepository';

export class PrismaLinesRepository implements ILinesRepository {
  private prisma = new PrismaClient();

  async save(data: Line): Promise<Line> {
    const { id, number, name, active, operatorId } = data;

    const line = await this.prisma.line.create({
      data: {
        id,
        number,
        name,
        active,
        operator: {
          connect: { id: operatorId },
        },
      },
    });

    return line;
  }

  async findByNumber(number: number): Promise<Line> {
    const line = await this.prisma.line.findOne({ where: { number } });

    return line;
  }

  async find(id: string): Promise<Line> {
    const line = await this.prisma.line.findOne({ where: { id } });

    return line;
  }

  async list(): Promise<Line[]> {
    const lines = await this.prisma.line.findMany({ orderBy: { number: 'asc' } });

    return lines;
  }

  async update(id: string, data: Partial<Line>): Promise<Line> {
    const { number, name, active, operatorId } = data;

    const line = await this.prisma.line.update({
      where: { id },
      data: {
        number: number || undefined,
        name: name || undefined,
        active: active || undefined,
        operator: operatorId ? { connect: { id: operatorId } } : undefined,
      },
    });

    return line;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.line.delete({ where: { id } });
  }
}
