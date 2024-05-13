import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema';
import { BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema';

export const BlokUncheckedCreateWithoutBlokFollowersInputSchema: z.ZodType<Prisma.BlokUncheckedCreateWithoutBlokFollowersInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BloksDocument: z.lazy(() => BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema).optional()
}).strict();

export default BlokUncheckedCreateWithoutBlokFollowersInputSchema;
