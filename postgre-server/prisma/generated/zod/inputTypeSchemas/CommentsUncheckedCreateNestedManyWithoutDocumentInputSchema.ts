import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsCreateWithoutDocumentInputSchema } from './CommentsCreateWithoutDocumentInputSchema';
import { CommentsUncheckedCreateWithoutDocumentInputSchema } from './CommentsUncheckedCreateWithoutDocumentInputSchema';
import { CommentsCreateOrConnectWithoutDocumentInputSchema } from './CommentsCreateOrConnectWithoutDocumentInputSchema';
import { CommentsCreateManyDocumentInputEnvelopeSchema } from './CommentsCreateManyDocumentInputEnvelopeSchema';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';

export const CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsUncheckedCreateNestedManyWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => CommentsCreateWithoutDocumentInputSchema),z.lazy(() => CommentsCreateWithoutDocumentInputSchema).array(),z.lazy(() => CommentsUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CommentsCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => CommentsCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CommentsCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CommentsWhereUniqueInputSchema),z.lazy(() => CommentsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CommentsUncheckedCreateNestedManyWithoutDocumentInputSchema;
