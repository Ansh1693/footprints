import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsCreateWithoutUserInputSchema } from './CommentsCreateWithoutUserInputSchema';
import { CommentsUncheckedCreateWithoutUserInputSchema } from './CommentsUncheckedCreateWithoutUserInputSchema';

export const CommentsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CommentsCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CommentsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommentsCreateWithoutUserInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default CommentsCreateOrConnectWithoutUserInputSchema;
