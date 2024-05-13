import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"

export const PinterestDataIncludeSchema: z.ZodType<Prisma.PinterestDataInclude> = z.object({
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export default PinterestDataIncludeSchema;
