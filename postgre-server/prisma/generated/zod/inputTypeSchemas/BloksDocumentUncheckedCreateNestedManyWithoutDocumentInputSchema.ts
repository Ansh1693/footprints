import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentCreateWithoutDocumentInputSchema } from './BloksDocumentCreateWithoutDocumentInputSchema';
import { BloksDocumentUncheckedCreateWithoutDocumentInputSchema } from './BloksDocumentUncheckedCreateWithoutDocumentInputSchema';
import { BloksDocumentCreateOrConnectWithoutDocumentInputSchema } from './BloksDocumentCreateOrConnectWithoutDocumentInputSchema';
import { BloksDocumentCreateManyDocumentInputEnvelopeSchema } from './BloksDocumentCreateManyDocumentInputEnvelopeSchema';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';

export const BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.BloksDocumentUncheckedCreateNestedManyWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentCreateWithoutDocumentInputSchema).array(),z.lazy(() => BloksDocumentUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BloksDocumentCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => BloksDocumentCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BloksDocumentCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BloksDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema;
