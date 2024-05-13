import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataWhereInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereInputSchema'

export const DocumentMetadataDeleteManyArgsSchema: z.ZodType<Prisma.DocumentMetadataDeleteManyArgs> = z.object({
  where: DocumentMetadataWhereInputSchema.optional(),
}).strict() ;

export default DocumentMetadataDeleteManyArgsSchema;
