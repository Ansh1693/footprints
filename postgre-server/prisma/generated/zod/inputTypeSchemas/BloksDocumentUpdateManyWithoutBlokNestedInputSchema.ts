import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentCreateWithoutBlokInputSchema } from './BloksDocumentCreateWithoutBlokInputSchema';
import { BloksDocumentUncheckedCreateWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateWithoutBlokInputSchema';
import { BloksDocumentCreateOrConnectWithoutBlokInputSchema } from './BloksDocumentCreateOrConnectWithoutBlokInputSchema';
import { BloksDocumentUpsertWithWhereUniqueWithoutBlokInputSchema } from './BloksDocumentUpsertWithWhereUniqueWithoutBlokInputSchema';
import { BloksDocumentCreateManyBlokInputEnvelopeSchema } from './BloksDocumentCreateManyBlokInputEnvelopeSchema';
import { BloksDocumentWhereUniqueInputSchema } from './BloksDocumentWhereUniqueInputSchema';
import { BloksDocumentUpdateWithWhereUniqueWithoutBlokInputSchema } from './BloksDocumentUpdateWithWhereUniqueWithoutBlokInputSchema';
import { BloksDocumentUpdateManyWithWhereWithoutBlokInputSchema } from './BloksDocumentUpdateManyWithWhereWithoutBlokInputSchema';
import { BloksDocumentScalarWhereInputSchema } from './BloksDocumentScalarWhereInputSchema';

export const BloksDocumentUpdateManyWithoutBlokNestedInputSchema: z.ZodType<Prisma.BloksDocumentUpdateManyWithoutBlokNestedInput> = z.object({
  create: z.union([ z.lazy(() => BloksDocumentCreateWithoutBlokInputSchema),z.lazy(() => BloksDocumentCreateWithoutBlokInputSchema).array(),z.lazy(() => BloksDocumentUncheckedCreateWithoutBlokInputSchema),z.lazy(() => BloksDocumentUncheckedCreateWithoutBlokInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BloksDocumentCreateOrConnectWithoutBlokInputSchema),z.lazy(() => BloksDocumentCreateOrConnectWithoutBlokInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BloksDocumentUpsertWithWhereUniqueWithoutBlokInputSchema),z.lazy(() => BloksDocumentUpsertWithWhereUniqueWithoutBlokInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BloksDocumentCreateManyBlokInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BloksDocumentWhereUniqueInputSchema),z.lazy(() => BloksDocumentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BloksDocumentUpdateWithWhereUniqueWithoutBlokInputSchema),z.lazy(() => BloksDocumentUpdateWithWhereUniqueWithoutBlokInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BloksDocumentUpdateManyWithWhereWithoutBlokInputSchema),z.lazy(() => BloksDocumentUpdateManyWithWhereWithoutBlokInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BloksDocumentScalarWhereInputSchema),z.lazy(() => BloksDocumentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BloksDocumentUpdateManyWithoutBlokNestedInputSchema;
