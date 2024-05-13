import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsCreateWithoutUserInputSchema } from './CommentsCreateWithoutUserInputSchema';
import { CommentsUncheckedCreateWithoutUserInputSchema } from './CommentsUncheckedCreateWithoutUserInputSchema';
import { CommentsCreateOrConnectWithoutUserInputSchema } from './CommentsCreateOrConnectWithoutUserInputSchema';
import { CommentsCreateManyUserInputEnvelopeSchema } from './CommentsCreateManyUserInputEnvelopeSchema';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';

export const CommentsUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentsUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CommentsCreateWithoutUserInputSchema),z.lazy(() => CommentsCreateWithoutUserInputSchema).array(),z.lazy(() => CommentsUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentsCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentsCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CommentsUncheckedCreateNestedManyWithoutUserInputSchema;
