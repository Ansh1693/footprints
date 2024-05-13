import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsCreateWithoutUserInputSchema } from './CommentsCreateWithoutUserInputSchema';
import { CommentsUncheckedCreateWithoutUserInputSchema } from './CommentsUncheckedCreateWithoutUserInputSchema';
import { CommentsCreateOrConnectWithoutUserInputSchema } from './CommentsCreateOrConnectWithoutUserInputSchema';
import { CommentsUpsertWithWhereUniqueWithoutUserInputSchema } from './CommentsUpsertWithWhereUniqueWithoutUserInputSchema';
import { CommentsCreateManyUserInputEnvelopeSchema } from './CommentsCreateManyUserInputEnvelopeSchema';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsUpdateWithWhereUniqueWithoutUserInputSchema } from './CommentsUpdateWithWhereUniqueWithoutUserInputSchema';
import { CommentsUpdateManyWithWhereWithoutUserInputSchema } from './CommentsUpdateManyWithWhereWithoutUserInputSchema';
import { CommentsScalarWhereInputSchema } from './CommentsScalarWhereInputSchema';

export const CommentsUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentsUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentsCreateWithoutUserInputSchema),z.lazy(() => CommentsCreateWithoutUserInputSchema).array(),z.lazy(() => CommentsUncheckedCreateWithoutUserInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentsCreateOrConnectWithoutUserInputSchema),z.lazy(() => CommentsCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentsUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentsUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentsCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentsUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CommentsUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentsUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CommentsUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentsScalarWhereInputSchema),z.lazy(() => CommentsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CommentsUncheckedUpdateManyWithoutUserNestedInputSchema;
