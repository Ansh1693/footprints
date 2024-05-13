import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"

export const BloksDocumentIncludeSchema: z.ZodType<Prisma.BloksDocumentInclude> = z.object({
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export default BloksDocumentIncludeSchema;
