import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentUpdateWithoutBlokInputSchema } from './BloksDocumentUpdateWithoutBlokInputSchema';
import { BloksDocumentUncheckedUpdateWithoutBlokInputSchema } from './BloksDocumentUncheckedUpdateWithoutBlokInputSchema';

export const BloksDocumentUpdateWithWhereUniqueWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentUpdateWithWhereUniqueWithoutBlokInput> = z.object({
  where: z.lazy(() => BloksDocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BloksDocumentUpdateWithoutBlokInputSchema),z.lazy(() => BloksDocumentUncheckedUpdateWithoutBlokInputSchema) ]),
}).strict();

export default BloksDocumentUpdateWithWhereUniqueWithoutBlokInputSchema;
