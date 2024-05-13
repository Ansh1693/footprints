import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsCreateWithoutDocumentInputSchema } from './CommentsCreateWithoutDocumentInputSchema';
import { CommentsUncheckedCreateWithoutDocumentInputSchema } from './CommentsUncheckedCreateWithoutDocumentInputSchema';
import { CommentsCreateOrConnectWithoutDocumentInputSchema } from './CommentsCreateOrConnectWithoutDocumentInputSchema';
import { CommentsUpsertWithWhereUniqueWithoutDocumentInputSchema } from './CommentsUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { CommentsCreateManyDocumentInputEnvelopeSchema } from './CommentsCreateManyDocumentInputEnvelopeSchema';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsUpdateWithWhereUniqueWithoutDocumentInputSchema } from './CommentsUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { CommentsUpdateManyWithWhereWithoutDocumentInputSchema } from './CommentsUpdateManyWithWhereWithoutDocumentInputSchema';
import { CommentsScalarWhereInputSchema } from './CommentsScalarWhereInputSchema';

export const CommentsUncheckedUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.CommentsUncheckedUpdateManyWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CommentsCreateWithoutDocumentInputSchema),z.lazy(() => CommentsCreateWithoutDocumentInputSchema).array(),z.lazy(() => CommentsUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentsCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => CommentsCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CommentsUpsertWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => CommentsUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentsCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CommentsUpdateWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => CommentsUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CommentsUpdateManyWithWhereWithoutDocumentInputSchema),z.lazy(() => CommentsUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CommentsScalarWhereInputSchema),z.lazy(() => CommentsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CommentsUncheckedUpdateManyWithoutDocumentNestedInputSchema;
