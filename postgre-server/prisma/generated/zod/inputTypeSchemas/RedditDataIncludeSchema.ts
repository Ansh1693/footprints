import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentArgsSchema } from "../outputTypeSchemas/DocumentArgsSchema"

export const RedditDataIncludeSchema: z.ZodType<Prisma.RedditDataInclude> = z.object({
  Document: z.union([z.boolean(),z.lazy(() => DocumentArgsSchema)]).optional(),
}).strict()

export default RedditDataIncludeSchema;
