import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema';

export const BlokUncheckedCreateWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokUncheckedCreateWithoutBloksDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BlokMetadata: z.lazy(() => BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema).optional()
}).strict();

export default BlokUncheckedCreateWithoutBloksDocumentInputSchema;
