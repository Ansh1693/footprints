import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"

export const DocumentMetadataIncludeSchema: z.ZodType<Prisma.DocumentMetadataInclude> = z.object({
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export default DocumentMetadataIncludeSchema;
