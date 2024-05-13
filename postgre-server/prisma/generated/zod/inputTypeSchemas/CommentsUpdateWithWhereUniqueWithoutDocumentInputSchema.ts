import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsWhereUniqueInputSchema } from './CommentsWhereUniqueInputSchema';
import { CommentsUpdateWithoutDocumentInputSchema } from './CommentsUpdateWithoutDocumentInputSchema';
import { CommentsUncheckedUpdateWithoutDocumentInputSchema } from './CommentsUncheckedUpdateWithoutDocumentInputSchema';

export const CommentsUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsUpdateWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => CommentsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CommentsUpdateWithoutDocumentInputSchema),z.lazy(() => CommentsUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default CommentsUpdateWithWhereUniqueWithoutDocumentInputSchema;
