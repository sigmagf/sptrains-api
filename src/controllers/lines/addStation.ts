import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { v4 } from 'uuid';

interface IAddStationRequestBodyProps {
  line: string;
  station: string;
  next?: string;
  previous?: string;
}

const prisma = new PrismaClient();

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    const { line, station, next, previous } = req.body as IAddStationRequestBodyProps;

    if(await prisma.stationsOnLine.findOne({ where: { lineId_stationId: { lineId: line, stationId: station } } })) {
      throw new Error('Station already in line.');
    }

    if(!next && !previous) {
      const haveStationsInLine = await prisma.stationsOnLine.findMany({ where: { lineId: line } });
      if(haveStationsInLine.length > 0) {
        throw new Error('Line have stations, inform previous or next station before.');
      }

      const ligature = await prisma.stationsOnLine.create({
        data: {
          id: v4(),
          line: { connect: { id: line } },
          station: { connect: { id: station } },
        },
      });
      return res.json({ ligature });
    }

    const prevLigature = previous ? await prisma.stationsOnLine.findOne({ where: { id: previous } }) : null;
    const nextId = next || prevLigature.nextId;
    const nextLigature = nextId ? await prisma.stationsOnLine.findOne({ where: { id: nextId } }) : null;

    if((prevLigature && prevLigature.lineId !== line) || (nextLigature && nextLigature.lineId !== line)) {
      throw new Error('Informed line not correponding of line in prev/next ligature.');
    }

    const ligature = await prisma.stationsOnLine.create({
      data: {
        id: v4(),
        previous: prevLigature ? { connect: { id: prevLigature.id } } : undefined,
        next: nextLigature ? { connect: { id: nextLigature.id } } : undefined,
        line: { connect: { id: line } },
        station: { connect: { id: station } },
      },
    });
    return res.json({ ligature });
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
