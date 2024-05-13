import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataWhereInputSchema } from './DocumentMetadataWhereInputSchema';

export const DocumentMetadataNullableRelationFilterSchema: z.ZodType<Prisma.DocumentMetadataNullableRelationFilter> = z.object({
  is: z.lazy(() => DocumentMetadataWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DocumentMetadataWhereInputSchema).optional().nullable()
}).strict();

export default DocumentMetadataNullableRelationFilterSchema;
