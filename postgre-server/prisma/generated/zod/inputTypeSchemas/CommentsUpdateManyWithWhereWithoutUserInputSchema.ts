import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsScalarWhereInputSchema } from './CommentsScalarWhereInputSchema';
import { CommentsUpdateManyMutationInputSchema } from './CommentsUpdateManyMutationInputSchema';
import { CommentsUncheckedUpdateManyWithoutUserInputSchema } from './CommentsUncheckedUpdateManyWithoutUserInputSchema';

export const CommentsUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CommentsUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CommentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommentsUpdateManyMutationInputSchema),z.lazy(() => CommentsUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default CommentsUpdateManyWithWhereWithoutUserInputSchema;
