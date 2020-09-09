import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { v4 } from 'uuid';

const prisma = new PrismaClient();

interface ICreateStationRequestProps {
  displayName: string;
  fullName: string;
  elevator?: boolean;
  lines: number[];
}

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    const { displayName, fullName, elevator, lines } = req.body as ICreateStationRequestProps;

    const station = await prisma.station.create({
      data: {
        id: v4(),
        displayName,
        fullName,
        elevator,
      },
    });

    await Promise.all(lines.map(async (lineNumber) => {
      const { id: lineId } = await prisma.line.findOne({ where: { number: lineNumber } });

      const lastStation = (await prisma.stationsOnLine.findMany({
        where: { lineId, nextId: null },
      }))[0];

      await prisma.stationsOnLine.create({
        data: {
          id: v4(),
          previous: { connect: { id: lastStation.id } },
          line: { connect: { id: lineId } },
          station: { connect: { id: station.id } },
        },
      });
    }));

    return res.status(201).send();
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
