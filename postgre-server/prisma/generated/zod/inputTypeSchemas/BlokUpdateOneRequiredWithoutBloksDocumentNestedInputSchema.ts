import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutBloksDocumentInputSchema } from './BlokCreateWithoutBloksDocumentInputSchema';
import { BlokUncheckedCreateWithoutBloksDocumentInputSchema } from './BlokUncheckedCreateWithoutBloksDocumentInputSchema';
import { BlokCreateOrConnectWithoutBloksDocumentInputSchema } from './BlokCreateOrConnectWithoutBloksDocumentInputSchema';
import { BlokUpsertWithoutBloksDocumentInputSchema } from './BlokUpsertWithoutBloksDocumentInputSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokUpdateToOneWithWhereWithoutBloksDocumentInputSchema } from './BlokUpdateToOneWithWhereWithoutBloksDocumentInputSchema';
import { BlokUpdateWithoutBloksDocumentInputSchema } from './BlokUpdateWithoutBloksDocumentInputSchema';
import { BlokUncheckedUpdateWithoutBloksDocumentInputSchema } from './BlokUncheckedUpdateWithoutBloksDocumentInputSchema';

export const BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema: z.ZodType<Prisma.BlokUpdateOneRequiredWithoutBloksDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBloksDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokCreateOrConnectWithoutBloksDocumentInputSchema).optional(),
  upsert: z.lazy(() => BlokUpsertWithoutBloksDocumentInputSchema).optional(),
  connect: z.lazy(() => BlokWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlokUpdateToOneWithWhereWithoutBloksDocumentInputSchema),z.lazy(() => BlokUpdateWithoutBloksDocumentInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBloksDocumentInputSchema) ]).optional(),
}).strict();

export default BlokUpdateOneRequiredWithoutBloksDocumentNestedInputSchema;
