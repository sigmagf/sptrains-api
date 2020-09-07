import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

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
        company: { select: { id: true, name: true, alias: true } },
        stations: {
          orderBy: { position: 'asc' },
          select: {
            station: { select: { id: true, displayName: true, fullName: true, elevator: true } },
          },
        },
      },
    });

    const linesWithStation = lines.map((line) => {
      return {
        id: line.id,
        number: line.number,
        name: line.name,
        active: line.active,
        color: line.color,
        company: line.company,
        stations: line.stations.map((item) => item.station),
      };
    });

    return res.json({ lines: linesWithStation });
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
