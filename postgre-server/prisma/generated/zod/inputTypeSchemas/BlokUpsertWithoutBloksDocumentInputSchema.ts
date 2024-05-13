import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokUpdateWithoutBloksDocumentInputSchema } from './BlokUpdateWithoutBloksDocumentInputSchema';
import { BlokUncheckedUpdateWithoutBloksDocumentInputSchema } from './BlokUncheckedUpdateWithoutBloksDocumentInputSchema';
import { BlokCreateWithoutBloksDocumentInputSchema } from './BlokCreateWithoutBloksDocumentInputSchema';
import { BlokUncheckedCreateWithoutBloksDocumentInputSchema } from './BlokUncheckedCreateWithoutBloksDocumentInputSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';

export const BlokUpsertWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokUpsertWithoutBloksDocumentInput> = z.object({
  update: z.union([ z.lazy(() => BlokUpdateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBloksDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => BlokCreateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBloksDocumentInputSchema) ]),
  where: z.lazy(() => BlokWhereInputSchema).optional()
}).strict();

export default BlokUpsertWithoutBloksDocumentInputSchema;
