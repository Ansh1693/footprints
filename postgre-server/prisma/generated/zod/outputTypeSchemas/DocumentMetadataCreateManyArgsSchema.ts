import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataCreateManyInputSchema } from '../inputTypeSchemas/DocumentMetadataCreateManyInputSchema'

export const DocumentMetadataCreateManyArgsSchema: z.ZodType<Prisma.DocumentMetadataCreateManyArgs> = z.object({
  data: z.union([ DocumentMetadataCreateManyInputSchema,DocumentMetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DocumentMetadataCreateManyArgsSchema;
