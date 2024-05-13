import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokCreateWithoutBloksDocumentInputSchema } from './BlokCreateWithoutBloksDocumentInputSchema';
import { BlokUncheckedCreateWithoutBloksDocumentInputSchema } from './BlokUncheckedCreateWithoutBloksDocumentInputSchema';

export const BlokCreateOrConnectWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokCreateOrConnectWithoutBloksDocumentInput> = z.object({
  where: z.lazy(() => BlokWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BlokCreateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBloksDocumentInputSchema) ]),
}).strict();

export default BlokCreateOrConnectWithoutBloksDocumentInputSchema;
