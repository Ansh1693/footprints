import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthCreateManyInputSchema } from '../inputTypeSchemas/GoogleAuthCreateManyInputSchema'

export const GoogleAuthCreateManyArgsSchema: z.ZodType<Prisma.GoogleAuthCreateManyArgs> = z.object({
  data: z.union([ GoogleAuthCreateManyInputSchema,GoogleAuthCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default GoogleAuthCreateManyArgsSchema;
