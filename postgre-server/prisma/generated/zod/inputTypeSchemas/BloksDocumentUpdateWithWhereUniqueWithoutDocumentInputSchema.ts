import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentUpdateWithoutDocumentInputSchema } from './BloksDocumentUpdateWithoutDocumentInputSchema';
import { BloksDocumentUncheckedUpdateWithoutDocumentInputSchema } from './BloksDocumentUncheckedUpdateWithoutDocumentInputSchema';

export const BloksDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentUpdateWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => BloksDocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BloksDocumentUpdateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default BloksDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema;
