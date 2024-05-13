import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentUpdateWithoutDocumentInputSchema } from './BloksDocumentUpdateWithoutDocumentInputSchema';
import { BloksDocumentUncheckedUpdateWithoutDocumentInputSchema } from './BloksDocumentUncheckedUpdateWithoutDocumentInputSchema';
import { BloksDocumentCreateWithoutDocumentInputSchema } from './BloksDocumentCreateWithoutDocumentInputSchema';
import { BloksDocumentUncheckedCreateWithoutDocumentInputSchema } from './BloksDocumentUncheckedCreateWithoutDocumentInputSchema';

export const BloksDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentUpsertWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => BloksDocumentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BloksDocumentUpdateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default BloksDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema;
