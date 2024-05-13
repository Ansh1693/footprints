import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsWhereInputSchema } from '../inputTypeSchemas/CommentsWhereInputSchema'

export const CommentsDeleteManyArgsSchema: z.ZodType<Prisma.CommentsDeleteManyArgs> = z.object({
  where: CommentsWhereInputSchema.optional(),
}).strict() ;

export default CommentsDeleteManyArgsSchema;
