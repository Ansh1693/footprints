import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsUpdateWithoutDocumentInputSchema } from './CommentsUpdateWithoutDocumentInputSchema';
import { CommentsUncheckedUpdateWithoutDocumentInputSchema } from './CommentsUncheckedUpdateWithoutDocumentInputSchema';
import { CommentsCreateWithoutDocumentInputSchema } from './CommentsCreateWithoutDocumentInputSchema';
import { CommentsUncheckedCreateWithoutDocumentInputSchema } from './CommentsUncheckedCreateWithoutDocumentInputSchema';

export const CommentsUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsUpsertWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => CommentsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CommentsUpdateWithoutDocumentInputSchema),z.lazy(() => CommentsUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => CommentsCreateWithoutDocumentInputSchema),z.lazy(() => CommentsUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default CommentsUpsertWithWhereUniqueWithoutDocumentInputSchema;
