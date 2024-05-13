import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsUpdateWithoutUserInputSchema } from './CommentsUpdateWithoutUserInputSchema';
import { CommentsUncheckedUpdateWithoutUserInputSchema } from './CommentsUncheckedUpdateWithoutUserInputSchema';

export const CommentsUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentsUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CommentsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommentsUpdateWithoutUserInputSchema),z.lazy(() => CommentsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default CommentsUpdateWithWhereUniqueWithoutUserInputSchema;
