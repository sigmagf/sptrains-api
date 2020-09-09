import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    const stations = await prisma.station.findMany();

    return res.json({ stations });
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
