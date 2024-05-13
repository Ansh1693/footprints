import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataSelectSchema } from '../inputTypeSchemas/DocumentMetadataSelectSchema';
import { DocumentMetadataIncludeSchema } from '../inputTypeSchemas/DocumentMetadataIncludeSchema';

export const DocumentMetadataArgsSchema: z.ZodType<Prisma.DocumentMetadataDefaultArgs> = z.object({
  select: z.lazy(() => DocumentMetadataSelectSchema).optional(),
  include: z.lazy(() => DocumentMetadataIncludeSchema).optional(),
}).strict();

export default DocumentMetadataArgsSchema;
