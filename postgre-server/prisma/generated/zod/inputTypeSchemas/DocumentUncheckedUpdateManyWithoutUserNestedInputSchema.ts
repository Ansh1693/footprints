import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutUserInputSchema } from './DocumentCreateWithoutUserInputSchema';
import { DocumentUncheckedCreateWithoutUserInputSchema } from './DocumentUncheckedCreateWithoutUserInputSchema';
import { DocumentCreateOrConnectWithoutUserInputSchema } from './DocumentCreateOrConnectWithoutUserInputSchema';
import { DocumentUpsertWithWhereUniqueWithoutUserInputSchema } from './DocumentUpsertWithWhereUniqueWithoutUserInputSchema';
import { DocumentCreateManyUserInputEnvelopeSchema } from './DocumentCreateManyUserInputEnvelopeSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithWhereUniqueWithoutUserInputSchema } from './DocumentUpdateWithWhereUniqueWithoutUserInputSchema';
import { DocumentUpdateManyWithWhereWithoutUserInputSchema } from './DocumentUpdateManyWithWhereWithoutUserInputSchema';
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema';

export const DocumentUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutUserInputSchema),z.lazy(() => DocumentCreateWithoutUserInputSchema).array(),z.lazy(() => DocumentUncheckedCreateWithoutUserInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentCreateOrConnectWithoutUserInputSchema),z.lazy(() => DocumentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DocumentUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => DocumentUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => DocumentUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DocumentUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => DocumentUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DocumentScalarWhereInputSchema),z.lazy(() => DocumentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DocumentUncheckedUpdateManyWithoutUserNestedInputSchema;
