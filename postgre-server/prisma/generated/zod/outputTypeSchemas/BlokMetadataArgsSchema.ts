import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataSelectSchema } from '../inputTypeSchemas/BlokMetadataSelectSchema';
import { BlokMetadataIncludeSchema } from '../inputTypeSchemas/BlokMetadataIncludeSchema';

export const BlokMetadataArgsSchema: z.ZodType<Prisma.BlokMetadataDefaultArgs> = z.object({
  select: z.lazy(() => BlokMetadataSelectSchema).optional(),
  include: z.lazy(() => BlokMetadataIncludeSchema).optional(),
}).strict();

export default BlokMetadataArgsSchema;
