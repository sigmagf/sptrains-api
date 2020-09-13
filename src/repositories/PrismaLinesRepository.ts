import { PrismaClient } from '@prisma/client';

import { Line } from '~/entities/Line';

import { ILinesRepository } from './ILinesRepository';

export class PrismaLinesRepository implements ILinesRepository {
  private prisma = new PrismaClient();

  async save(data: Line): Promise<Line> {
    const { id, number, name, color, active, operatorId } = data;

    const line = await this.prisma.line.create({
      data: {
        id,
        number,
        name,
        color,
        active,
        operator: {
          connect: { id: operatorId },
        },
      },
    });

    return line;
  }

  async find(id: string): Promise<Line> {
    const line = await this.prisma.line.findOne({ where: { id } });

    return line;
  }

  async list(): Promise<Line[]> {
    const lines = await this.prisma.line.findMany();

    return lines;
  }

  async update(id: string, data: Partial<Line>): Promise<Line> {
    const { number, name, color, active, operatorId } = data;

    const line = await this.prisma.line.update({
      where: { id },
      data: {
        number: number || undefined,
        name: name || undefined,
        color: color || undefined,
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
