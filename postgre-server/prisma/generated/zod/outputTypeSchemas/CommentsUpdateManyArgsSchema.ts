import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsUpdateManyMutationInputSchema } from '../inputTypeSchemas/CommentsUpdateManyMutationInputSchema'
import { CommentsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CommentsUncheckedUpdateManyInputSchema'
import { CommentsWhereInputSchema } from '../inputTypeSchemas/CommentsWhereInputSchema'

export const CommentsUpdateManyArgsSchema: z.ZodType<Prisma.CommentsUpdateManyArgs> = z.object({
  data: z.union([ CommentsUpdateManyMutationInputSchema,CommentsUncheckedUpdateManyInputSchema ]),
  where: CommentsWhereInputSchema.optional(),
}).strict() ;

export default CommentsUpdateManyArgsSchema;
