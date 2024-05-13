import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';
import { RedditAuthUpdateWithoutUserAuthInputSchema } from './RedditAuthUpdateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedUpdateWithoutUserAuthInputSchema } from './RedditAuthUncheckedUpdateWithoutUserAuthInputSchema';

export const RedditAuthUpdateToOneWithWhereWithoutUserAuthInputSchema: z.ZodType<Prisma.RedditAuthUpdateToOneWithWhereWithoutUserAuthInput> = z.object({
  where: z.lazy(() => RedditAuthWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RedditAuthUpdateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedUpdateWithoutUserAuthInputSchema) ]),
}).strict();

export default RedditAuthUpdateToOneWithWhereWithoutUserAuthInputSchema;
