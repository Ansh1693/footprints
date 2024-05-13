import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthWhereUniqueInputSchema } from './RedditAuthWhereUniqueInputSchema';
import { RedditAuthCreateWithoutUserAuthInputSchema } from './RedditAuthCreateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedCreateWithoutUserAuthInputSchema } from './RedditAuthUncheckedCreateWithoutUserAuthInputSchema';

export const RedditAuthCreateOrConnectWithoutUserAuthInputSchema: z.ZodType<Prisma.RedditAuthCreateOrConnectWithoutUserAuthInput> = z.object({
  where: z.lazy(() => RedditAuthWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RedditAuthCreateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedCreateWithoutUserAuthInputSchema) ]),
}).strict();

export default RedditAuthCreateOrConnectWithoutUserAuthInputSchema;
