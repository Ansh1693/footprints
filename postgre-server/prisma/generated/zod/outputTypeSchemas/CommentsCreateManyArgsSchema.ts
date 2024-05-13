import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentsCreateManyInputSchema } from '../inputTypeSchemas/CommentsCreateManyInputSchema'

export const CommentsCreateManyArgsSchema: z.ZodType<Prisma.CommentsCreateManyArgs> = z.object({
  data: z.union([ CommentsCreateManyInputSchema,CommentsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CommentsCreateManyArgsSchema;
