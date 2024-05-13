import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthUpdateWithoutUserAuthInputSchema } from './RedditAuthUpdateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedUpdateWithoutUserAuthInputSchema } from './RedditAuthUncheckedUpdateWithoutUserAuthInputSchema';
import { RedditAuthCreateWithoutUserAuthInputSchema } from './RedditAuthCreateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedCreateWithoutUserAuthInputSchema } from './RedditAuthUncheckedCreateWithoutUserAuthInputSchema';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';

export const RedditAuthUpsertWithoutUserAuthInputSchema: z.ZodType<Prisma.RedditAuthUpsertWithoutUserAuthInput> = z.object({
  update: z.union([ z.lazy(() => RedditAuthUpdateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedUpdateWithoutUserAuthInputSchema) ]),
  create: z.union([ z.lazy(() => RedditAuthCreateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedCreateWithoutUserAuthInputSchema) ]),
  where: z.lazy(() => RedditAuthWhereInputSchema).optional()
}).strict();

export default RedditAuthUpsertWithoutUserAuthInputSchema;
