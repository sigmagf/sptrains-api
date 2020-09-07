import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    const { line, station } = req.body;

    if(await prisma.stationsOnLine.findOne({ where: { lineId_stationId: { lineId: line, stationId: station } } })) {
      throw new Error('Station already in line.');
    }

    const lineStations = await prisma.stationsOnLine.findMany({
      where: { lineId: line },
      orderBy: { position: 'asc' },
    });

    const newStationPosition = lineStations[lineStations.length - 1].position + 1 || 1;

    const stationOnLine = await prisma.stationsOnLine.create({
      data: {
        position: newStationPosition,
        line: {
          connect: { id: line },
        },
        station: {
          connect: { id: station },
        },
      },
      include: {
        line: true,
        station: true,
      },
    });

    return res.json(stationOnLine);
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
