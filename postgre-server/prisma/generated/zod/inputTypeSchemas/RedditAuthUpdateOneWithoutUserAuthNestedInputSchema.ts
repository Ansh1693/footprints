import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditAuthCreateWithoutUserAuthInputSchema } from './RedditAuthCreateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedCreateWithoutUserAuthInputSchema } from './RedditAuthUncheckedCreateWithoutUserAuthInputSchema';
import { RedditAuthCreateOrConnectWithoutUserAuthInputSchema } from './RedditAuthCreateOrConnectWithoutUserAuthInputSchema';
import { RedditAuthUpsertWithoutUserAuthInputSchema } from './RedditAuthUpsertWithoutUserAuthInputSchema';
import { RedditAuthWhereInputSchema } from './RedditAuthWhereInputSchema';
import { RedditAuthWhereUniqueInputSchema } from './RedditAuthWhereUniqueInputSchema';
import { RedditAuthUpdateToOneWithWhereWithoutUserAuthInputSchema } from './RedditAuthUpdateToOneWithWhereWithoutUserAuthInputSchema';
import { RedditAuthUpdateWithoutUserAuthInputSchema } from './RedditAuthUpdateWithoutUserAuthInputSchema';
import { RedditAuthUncheckedUpdateWithoutUserAuthInputSchema } from './RedditAuthUncheckedUpdateWithoutUserAuthInputSchema';

export const RedditAuthUpdateOneWithoutUserAuthNestedInputSchema: z.ZodType<Prisma.RedditAuthUpdateOneWithoutUserAuthNestedInput> = z.object({
  create: z.union([ z.lazy(() => RedditAuthCreateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedCreateWithoutUserAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RedditAuthCreateOrConnectWithoutUserAuthInputSchema).optional(),
  upsert: z.lazy(() => RedditAuthUpsertWithoutUserAuthInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RedditAuthWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RedditAuthWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RedditAuthWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RedditAuthUpdateToOneWithWhereWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUpdateWithoutUserAuthInputSchema),z.lazy(() => RedditAuthUncheckedUpdateWithoutUserAuthInputSchema) ]).optional(),
}).strict();

export default RedditAuthUpdateOneWithoutUserAuthNestedInputSchema;
