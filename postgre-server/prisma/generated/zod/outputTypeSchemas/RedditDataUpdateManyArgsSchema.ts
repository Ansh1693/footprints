import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditDataUpdateManyMutationInputSchema } from '../inputTypeSchemas/RedditDataUpdateManyMutationInputSchema'
import { RedditDataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RedditDataUncheckedUpdateManyInputSchema'
import { RedditDataWhereInputSchema } from '../inputTypeSchemas/RedditDataWhereInputSchema'

export const RedditDataUpdateManyArgsSchema: z.ZodType<Prisma.RedditDataUpdateManyArgs> = z.object({
  data: z.union([ RedditDataUpdateManyMutationInputSchema,RedditDataUncheckedUpdateManyInputSchema ]),
  where: RedditDataWhereInputSchema.optional(),
}).strict() ;

export default RedditDataUpdateManyArgsSchema;
