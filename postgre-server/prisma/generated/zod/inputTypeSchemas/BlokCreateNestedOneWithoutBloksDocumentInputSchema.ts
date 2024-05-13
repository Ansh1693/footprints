import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutBloksDocumentInputSchema } from './BlokCreateWithoutBloksDocumentInputSchema';
import { BlokUncheckedCreateWithoutBloksDocumentInputSchema } from './BlokUncheckedCreateWithoutBloksDocumentInputSchema';
import { BlokCreateOrConnectWithoutBloksDocumentInputSchema } from './BlokCreateOrConnectWithoutBloksDocumentInputSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';

export const BlokCreateNestedOneWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokCreateNestedOneWithoutBloksDocumentInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBloksDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokCreateOrConnectWithoutBloksDocumentInputSchema).optional(),
  connect: z.lazy(() => BlokWhereUniqueInputSchema).optional()
}).strict();

export default BlokCreateNestedOneWithoutBloksDocumentInputSchema;
