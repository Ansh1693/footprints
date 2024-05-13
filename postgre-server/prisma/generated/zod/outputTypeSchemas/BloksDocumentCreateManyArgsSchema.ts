import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentCreateManyInputSchema } from '../inputTypeSchemas/BloksDocumentCreateManyInputSchema'

export const BloksDocumentCreateManyArgsSchema: z.ZodType<Prisma.BloksDocumentCreateManyArgs> = z.object({
  data: z.union([ BloksDocumentCreateManyInputSchema,BloksDocumentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BloksDocumentCreateManyArgsSchema;
