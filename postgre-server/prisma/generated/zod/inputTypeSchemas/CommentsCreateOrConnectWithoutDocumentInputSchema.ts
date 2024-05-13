import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsCreateWithoutDocumentInputSchema } from './CommentsCreateWithoutDocumentInputSchema';
import { CommentsUncheckedCreateWithoutDocumentInputSchema } from './CommentsUncheckedCreateWithoutDocumentInputSchema';

export const CommentsCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => CommentsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CommentsCreateWithoutDocumentInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default CommentsCreateOrConnectWithoutDocumentInputSchema;
