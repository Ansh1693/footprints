import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentUpdateWithoutBlokInputSchema } from './BloksDocumentUpdateWithoutBlokInputSchema';
import { BloksDocumentUncheckedUpdateWithoutBlokInputSchema } from './BloksDocumentUncheckedUpdateWithoutBlokInputSchema';
import { BloksDocumentCreateWithoutBlokInputSchema } from './BloksDocumentCreateWithoutBlokInputSchema';
import { BloksDocumentUncheckedCreateWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateWithoutBlokInputSchema';

export const BloksDocumentUpsertWithWhereUniqueWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentUpsertWithWhereUniqueWithoutBlokInput> = z.object({
  where: z.lazy(() => BloksDocumentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BloksDocumentUpdateWithoutBlokInputSchema),z.lazy(() => BloksDocumentUncheckedUpdateWithoutBlokInputSchema) ]),
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutBlokInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutBlokInputSchema) ]),
}).strict();

export default BloksDocumentUpsertWithWhereUniqueWithoutBlokInputSchema;
