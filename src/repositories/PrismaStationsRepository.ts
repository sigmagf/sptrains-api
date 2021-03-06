import { PrismaClient } from '@prisma/client';

import { Station } from '~/entities/Station';

import { IStationsRepository } from './IStationsRepository';

export class PrismaStationsRepository implements IStationsRepository {
  private prisma = new PrismaClient();

  async save(data: Station): Promise<Station> {
    const station = await this.prisma.station.create({ data });

    return station;
  }

  async find(id: string): Promise<Station> {
    const station = await this.prisma.station.findOne({ where: { id } });

    return station;
  }

  async list(): Promise<Station[]> {
    const stations = await this.prisma.station.findMany({ orderBy: { fullName: 'asc' } });

    return stations;
  }

  async update(id: string, data: Partial<Station>): Promise<Station> {
    const station = await this.prisma.station.update({ where: { id }, data });

    return station;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.station.delete({ where: { id } });
  }
}
