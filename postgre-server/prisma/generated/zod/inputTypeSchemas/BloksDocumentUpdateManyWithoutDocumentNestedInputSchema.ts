import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentCreateWithoutDocumentInputSchema } from './BloksDocumentCreateWithoutDocumentInputSchema';
import { BloksDocumentUncheckedCreateWithoutDocumentInputSchema } from './BloksDocumentUncheckedCreateWithoutDocumentInputSchema';
import { BloksDocumentCreateOrConnectWithoutDocumentInputSchema } from './BloksDocumentCreateOrConnectWithoutDocumentInputSchema';
import { BloksDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema } from './BloksDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { BloksDocumentCreateManyDocumentInputEnvelopeSchema } from './BloksDocumentCreateManyDocumentInputEnvelopeSchema';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema } from './BloksDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { BloksDocumentUpdateManyWithWhereWithoutDocumentInputSchema } from './BloksDocumentUpdateManyWithWhereWithoutDocumentInputSchema';
import { BloksDocumentScalarWhereInputSchema } from './BloksDocumentScalarWhereInputSchema';

export const BloksDocumentUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.BloksDocumentUpdateManyWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentCreateWithoutDocumentInputSchema).array(),z.lazy(() => BloksDocumentUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BloksDocumentCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => BloksDocumentCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BloksDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BloksDocumentCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BloksDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BloksDocumentUpdateManyWithWhereWithoutDocumentInputSchema),z.lazy(() => BloksDocumentUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BloksDocumentScalarWhereInputSchema),z.lazy(() => BloksDocumentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BloksDocumentUpdateManyWithoutDocumentNestedInputSchema;
