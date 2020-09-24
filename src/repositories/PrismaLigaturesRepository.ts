import { PrismaClient } from '@prisma/client';

import { Ligature } from '~/entities/Ligature';

import { ILigaturesRepository } from './ILigaturesRepository';

interface IFixReturProps extends Ligature {
  id: string;
  details: string;
  lineId: string;
  stationId: string;
  nextId: string;
  previous: {
    id: string;
  };
}

export class PrismaLigaturesRepository implements ILigaturesRepository {
  private prisma = new PrismaClient();

  // eslint-disable-next-line
  private fixReturn(data: IFixReturProps): Ligature {
    return {
      id: data.id,
      details: data.details,
      lineId: data.lineId,
      stationId: data.stationId,
      nextId: data.nextId ? data.nextId : null,
      previousId: data.previous ? data.previous.id : null,
    };
  }

  async save(data: Ligature): Promise<Ligature> {
    const { id, lineId, stationId, details, nextId, previousId } = data;

    const previous = previousId
      ? await this.prisma.stationsOnLine.findOne({ where: { id: previousId } })
      : undefined;

    const next = (previous && previous.nextId) || nextId
      ? await this.prisma.stationsOnLine.findOne({ where: { id: previous.nextId || nextId } })
      : undefined;

    const ligature = await this.prisma.stationsOnLine.create({
      data: {
        id,
        details,
        line: { connect: { id: lineId } },
        station: { connect: { id: stationId } },
        next: next ? { connect: { id: next.id } } : undefined,
        previous: previous ? { connect: { id: previous.id } } : undefined,
      },
      select: {
        id: true,
        details: true,
        lineId: true,
        stationId: true,
        nextId: true,
        previous: { select: { id: true } },
      },
    });

    const returnedLigature: Ligature = this.fixReturn(ligature);

    return returnedLigature;
  }

  async findByLineAndStation(lineId: string, stationId: string): Promise<Ligature> {
    const ligature = await this.prisma.stationsOnLine.findOne({
      where: {
        lineId_stationId: { lineId, stationId },
      },
      select: {
        id: true,
        details: true,
        lineId: true,
        stationId: true,
        nextId: true,
        previous: { select: { id: true } },
      },
    });

    if(!ligature) {
      return null;
    }

    const returnedLigature: Ligature = this.fixReturn(ligature);

    return returnedLigature;
  }

  async find(id: string): Promise<Ligature> {
    const ligature = await this.prisma.stationsOnLine.findOne({
      where: { id },
      select: {
        id: true,
        details: true,
        lineId: true,
        stationId: true,
        nextId: true,
        previous: { select: { id: true } },
      },
    });

    if(!ligature) {
      return null;
    }

    const returnedLigature: Ligature = this.fixReturn(ligature);

    return returnedLigature;
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  async list(): Promise<Ligature[]> {
    const ligatures = await this.prisma.stationsOnLine.findMany({
      select: {
        id: true,
        details: true,
        lineId: true,
        stationId: true,
        nextId: true,
        previous: { select: { id: true } },
      },
    });

    if(ligatures.length === 0) {
      return [];
    }

    const returnedLigatures: Ligature[] = ligatures.map((ligature) => this.fixReturn(ligature));

    return returnedLigatures;
  }

  async listByLine(lineId: string): Promise<Ligature[]> {
    const databaseLigatures = await this.prisma.stationsOnLine.findMany({
      where: { lineId },
      select: {
        id: true,
        details: true,
        lineId: true,
        stationId: true,
        nextId: true,
        previous: { select: { id: true } },
      },
    });

    if(databaseLigatures.length === 0) {
      return [];
    }

    const fixedLigatures: Ligature[] = databaseLigatures.map((ligature) => this.fixReturn(ligature));

    const ligatures: Ligature[] = [];

    ligatures.push(fixedLigatures.find((ligature) => ligature.previousId === null));

    while(ligatures[ligatures.length - 1].nextId !== null) {
      ligatures.push(fixedLigatures.find((ligature) => ligature.previousId === ligatures[ligatures.length - 1].id));
    }

    return ligatures;
  }

  async update(id: string, data: Partial<Ligature>): Promise<Ligature> {
    const { details, lineId, stationId, nextId, previousId } = data;

    const previous = previousId
      ? await this.prisma.stationsOnLine.findOne({ where: { id: previousId } })
      : undefined;

    const next = (previous && previous.nextId) || nextId
      ? await this.prisma.stationsOnLine.findOne({ where: { id: previous.nextId || nextId } })
      : undefined;

    const ligature = await this.prisma.stationsOnLine.update({
      where: { id },
      data: {
        details: details || undefined,
        line: lineId ? { connect: { id: lineId } } : undefined,
        station: stationId ? { connect: { id: stationId } } : undefined,
        next: next ? { connect: { id: next.id } } : undefined,
        previous: previous ? { connect: { id: previous.id } } : undefined,
      },
      select: {
        id: true,
        details: true,
        lineId: true,
        stationId: true,
        nextId: true,
        previous: { select: { id: true } },
      },
    });

    if(!ligature) {
      return null;
    }

    const returnedLigature: Ligature = this.fixReturn(ligature);

    return returnedLigature;
  }

  async delete(id: string): Promise<void> {
    const ligature = await this.prisma.stationsOnLine.findOne({
      where: { id },
      select: {
        nextId: true,
        previous: true,
      },
    });

    if(ligature.previous && ligature.nextId) {
      await this.prisma.stationsOnLine.update({
        where: { id: ligature.previous.id },
        data: {
          next: { connect: { id: ligature.nextId } },
        },
      });
    }

    await this.prisma.stationsOnLine.delete({ where: { id } });
  }
}
