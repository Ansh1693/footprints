import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';
import { BlokUpdateWithoutBloksDocumentInputSchema } from './BlokUpdateWithoutBloksDocumentInputSchema';
import { BlokUncheckedUpdateWithoutBloksDocumentInputSchema } from './BlokUncheckedUpdateWithoutBloksDocumentInputSchema';

export const BlokUpdateToOneWithWhereWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokUpdateToOneWithWhereWithoutBloksDocumentInput> = z.object({
  where: z.lazy(() => BlokWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BlokUpdateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBloksDocumentInputSchema) ]),
}).strict();

export default BlokUpdateToOneWithWhereWithoutBloksDocumentInputSchema;
