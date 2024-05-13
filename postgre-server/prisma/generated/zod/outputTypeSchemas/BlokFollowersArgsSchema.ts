import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokFollowersSelectSchema } from '../inputTypeSchemas/BlokFollowersSelectSchema';
import { BlokFollowersIncludeSchema } from '../inputTypeSchemas/BlokFollowersIncludeSchema';

export const BlokFollowersArgsSchema: z.ZodType<Prisma.BlokFollowersDefaultArgs> = z.object({
  select: z.lazy(() => BlokFollowersSelectSchema).optional(),
  include: z.lazy(() => BlokFollowersIncludeSchema).optional(),
}).strict();

export default BlokFollowersArgsSchema;
