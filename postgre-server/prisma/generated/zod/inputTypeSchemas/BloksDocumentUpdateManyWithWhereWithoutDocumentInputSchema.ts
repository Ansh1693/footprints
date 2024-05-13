import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentScalarWhereInputSchema } from './BloksDocumentScalarWhereInputSchema';
import { BloksDocumentUpdateManyMutationInputSchema } from './BloksDocumentUpdateManyMutationInputSchema';
import { BloksDocumentUncheckedUpdateManyWithoutDocumentInputSchema } from './BloksDocumentUncheckedUpdateManyWithoutDocumentInputSchema';

export const BloksDocumentUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentUpdateManyWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => BloksDocumentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BloksDocumentUpdateManyMutationInputSchema),z.lazy(() => BloksDocumentUncheckedUpdateManyWithoutDocumentInputSchema) ]),
}).strict();

export default BloksDocumentUpdateManyWithWhereWithoutDocumentInputSchema;
