import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentScalarWhereInputSchema } from './BloksDocumentScalarWhereInputSchema';
import { BloksDocumentUpdateManyMutationInputSchema } from './BloksDocumentUpdateManyMutationInputSchema';
import { BloksDocumentUncheckedUpdateManyWithoutBlokInputSchema } from './BloksDocumentUncheckedUpdateManyWithoutBlokInputSchema';

export const BloksDocumentUpdateManyWithWhereWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentUpdateManyWithWhereWithoutBlokInput> = z.object({
  where: z.lazy(() => BloksDocumentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BloksDocumentUpdateManyMutationInputSchema),z.lazy(() => BloksDocumentUncheckedUpdateManyWithoutBlokInputSchema) ]),
}).strict();

export default BloksDocumentUpdateManyWithWhereWithoutBlokInputSchema;
