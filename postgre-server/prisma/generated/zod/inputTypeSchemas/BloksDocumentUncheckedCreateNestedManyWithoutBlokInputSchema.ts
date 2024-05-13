import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentCreateWithoutBlokInputSchema } from './BloksDocumentCreateWithoutBlokInputSchema';
import { BloksDocumentUncheckedCreateWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateWithoutBlokInputSchema';
import { BloksDocumentCreateOrConnectWithoutBlokInputSchema } from './BloksDocumentCreateOrConnectWithoutBlokInputSchema';
import { BloksDocumentCreateManyBlokInputEnvelopeSchema } from './BloksDocumentCreateManyBlokInputEnvelopeSchema';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';

export const BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema: z.ZodType<Prisma.BloksDocumentUncheckedCreateNestedManyWithoutBlokInput> = z.object({
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutBlokInputSchema),z.lazy(() => BloksDocumentCreateWithoutBlokInputSchema).array(),z.lazy(() => BloksDocumentUncheckedCreateWithoutBlokInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutBlokInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BloksDocumentCreateOrConnectWithoutBlokInputSchema),z.lazy(() => BloksDocumentCreateOrConnectWithoutBlokInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BloksDocumentCreateManyBlokInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema;
