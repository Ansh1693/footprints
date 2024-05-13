import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentWhereInputSchema } from '../inputTypeSchemas/BloksDocumentWhereInputSchema'

export const BloksDocumentDeleteManyArgsSchema: z.ZodType<Prisma.BloksDocumentDeleteManyArgs> = z.object({
  where: BloksDocumentWhereInputSchema.optional(),
}).strict() ;

export default BloksDocumentDeleteManyArgsSchema;
