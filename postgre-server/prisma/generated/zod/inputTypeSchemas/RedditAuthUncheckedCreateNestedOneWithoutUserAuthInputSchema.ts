import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthCreateWithoutUserAuthInputSchema } from './RedditAuthCreateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedCreateWithoutUserAuthInputSchema } from './RedditAuthUncheckedCreateWithoutUserAuthInputSchema';
import { RedditAuthCreateOrConnectWithoutUserAuthInputSchema } from './RedditAuthCreateOrConnectWithoutUserAuthInputSchema';
import { RedditAuthWhereUniqueInputSchema } from './RedditAuthWhereUniqueInputSchema';

export const RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema: z.ZodType<Prisma.RedditAuthUncheckedCreateNestedOneWithoutUserAuthInput> = z.object({
  create: z.union([ z.lazy(() => RedditAuthCreateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedCreateWithoutUserAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RedditAuthCreateOrConnectWithoutUserAuthInputSchema).optional(),
  connect: z.lazy(() => RedditAuthWhereUniqueInputSchema).optional()
}).strict();

export default RedditAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema;
