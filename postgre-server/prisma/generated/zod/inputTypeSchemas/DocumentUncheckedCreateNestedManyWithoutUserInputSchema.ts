import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutUserInputSchema } from './DocumentCreateWithoutUserInputSchema';
import { DocumentUncheckedCreateWithoutUserInputSchema } from './DocumentUncheckedCreateWithoutUserInputSchema';
import { DocumentCreateOrConnectWithoutUserInputSchema } from './DocumentCreateOrConnectWithoutUserInputSchema';
import { DocumentCreateManyUserInputEnvelopeSchema } from './DocumentCreateManyUserInputEnvelopeSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.DocumentUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutUserInputSchema),z.lazy(() => DocumentCreateWithoutUserInputSchema).array(),z.lazy(() => DocumentUncheckedCreateWithoutUserInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentCreateOrConnectWithoutUserInputSchema),z.lazy(() => DocumentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DocumentUncheckedCreateNestedManyWithoutUserInputSchema;
