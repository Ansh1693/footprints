import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsSelectSchema } from '../inputTypeSchemas/CommentsSelectSchema';
import { CommentsIncludeSchema } from '../inputTypeSchemas/CommentsIncludeSchema';

export const CommentsArgsSchema: z.ZodType<Prisma.CommentsDefaultArgs> = z.object({
  select: z.lazy(() => CommentsSelectSchema).optional(),
  include: z.lazy(() => CommentsIncludeSchema).optional(),
}).strict();

export default CommentsArgsSchema;
