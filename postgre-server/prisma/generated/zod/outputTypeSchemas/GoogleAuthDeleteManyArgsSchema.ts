import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthWhereInputSchema } from '../inputTypeSchemas/GoogleAuthWhereInputSchema'

export const GoogleAuthDeleteManyArgsSchema: z.ZodType<Prisma.GoogleAuthDeleteManyArgs> = z.object({
  where: GoogleAuthWhereInputSchema.optional(),
}).strict() ;

export default GoogleAuthDeleteManyArgsSchema;
