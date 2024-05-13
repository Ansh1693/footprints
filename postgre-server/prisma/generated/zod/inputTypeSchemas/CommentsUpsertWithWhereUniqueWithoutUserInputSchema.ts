import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsUpdateWithoutUserInputSchema } from './CommentsUpdateWithoutUserInputSchema';
import { CommentsUncheckedUpdateWithoutUserInputSchema } from './CommentsUncheckedUpdateWithoutUserInputSchema';
import { CommentsCreateWithoutUserInputSchema } from './CommentsCreateWithoutUserInputSchema';
import { CommentsUncheckedCreateWithoutUserInputSchema } from './CommentsUncheckedCreateWithoutUserInputSchema';

export const CommentsUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentsUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CommentsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommentsUpdateWithoutUserInputSchema),z.lazy(() => CommentsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CommentsCreateWithoutUserInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default CommentsUpsertWithWhereUniqueWithoutUserInputSchema;
