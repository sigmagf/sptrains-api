import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

interface IStationResponse {
  id: string;
  displayName: string;
  fullName: string;
  elevator: boolean;
}

const prisma = new PrismaClient();

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    const lines = await prisma.line.findMany({
      select: {
        id: true,
        number: true,
        name: true,
        color: true,
        active: true,
        companyId: true,
        stations: {
          include: {
            station: { select: { id: true, displayName: true, fullName: true, elevator: true } },
            previous: true,
            next: true,
          },
        },
      },
    });

    const linesWithStations = lines.map((line) => {
      const stationsOrdened: IStationResponse[] = [];

      let last = line.stations.find((stationOnLine) => stationOnLine.previous === null);
      stationsOrdened.push(last.station);

      while(last.next !== null) {
        // eslint-disable-next-line no-loop-func
        last = line.stations.find((stationOnLine) => stationOnLine.id === last.nextId);
        stationsOrdened.push(last.station);
      }

      return res.json({
        line: {
          id: line.id,
          number: line.number,
          name: line.name,
          color: line.color,
          active: line.active,
          company: line.companyId,
          stations: stationsOrdened,
        },
      });
    });

    return res.json({ lines: linesWithStations });
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
