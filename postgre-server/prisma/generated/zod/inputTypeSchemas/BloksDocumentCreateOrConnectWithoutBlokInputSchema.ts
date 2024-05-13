import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentCreateWithoutBlokInputSchema } from './BloksDocumentCreateWithoutBlokInputSchema';
import { BloksDocumentUncheckedCreateWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateWithoutBlokInputSchema';

export const BloksDocumentCreateOrConnectWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentCreateOrConnectWithoutBlokInput> = z.object({
  where: z.lazy(() => BloksDocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutBlokInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutBlokInputSchema) ]),
}).strict();

export default BloksDocumentCreateOrConnectWithoutBlokInputSchema;
