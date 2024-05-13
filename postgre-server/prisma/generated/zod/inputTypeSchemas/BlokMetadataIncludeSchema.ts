import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"

export const BlokMetadataIncludeSchema: z.ZodType<Prisma.BlokMetadataInclude> = z.object({
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
}).strict()

export default BlokMetadataIncludeSchema;
