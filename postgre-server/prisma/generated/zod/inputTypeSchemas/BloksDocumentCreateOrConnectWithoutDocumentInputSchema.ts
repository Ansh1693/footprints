import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentCreateWithoutDocumentInputSchema } from './BloksDocumentCreateWithoutDocumentInputSchema';
import { BloksDocumentUncheckedCreateWithoutDocumentInputSchema } from './BloksDocumentUncheckedCreateWithoutDocumentInputSchema';

export const BloksDocumentCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => BloksDocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default BloksDocumentCreateOrConnectWithoutDocumentInputSchema;
