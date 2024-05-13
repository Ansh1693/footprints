import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentsScalarWhereInputSchema } from './CommentsScalarWhereInputSchema';
import { CommentsUpdateManyMutationInputSchema } from './CommentsUpdateManyMutationInputSchema';
import { CommentsUncheckedUpdateManyWithoutDocumentInputSchema } from './CommentsUncheckedUpdateManyWithoutDocumentInputSchema';

export const CommentsUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.CommentsUpdateManyWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => CommentsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CommentsUpdateManyMutationInputSchema),z.lazy(() => CommentsUncheckedUpdateManyWithoutDocumentInputSchema) ]),
}).strict();

export default CommentsUpdateManyWithWhereWithoutDocumentInputSchema;
