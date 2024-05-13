import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema';
import { BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema';

export const BlokUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BlokUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BloksDocument: z.lazy(() => BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataUncheckedCreateNestedOneWithoutBlokInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema).optional()
}).strict();

export default BlokUncheckedCreateWithoutUserInputSchema;
