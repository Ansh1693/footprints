import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RedditAuthUpdateManyMutationInputSchema } from '../inputTypeSchemas/RedditAuthUpdateManyMutationInputSchema'
import { RedditAuthUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RedditAuthUncheckedUpdateManyInputSchema'
import { RedditAuthWhereInputSchema } from '../inputTypeSchemas/RedditAuthWhereInputSchema'

export const RedditAuthUpdateManyArgsSchema: z.ZodType<Prisma.RedditAuthUpdateManyArgs> = z.object({
  data: z.union([ RedditAuthUpdateManyMutationInputSchema,RedditAuthUncheckedUpdateManyInputSchema ]),
  where: RedditAuthWhereInputSchema.optional(),
}).strict() ;

export default RedditAuthUpdateManyArgsSchema;
