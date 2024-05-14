import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema } from './BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema';
import { BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema } from './BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema';

export const BlokUncheckedCreateWithoutBlokMetadataInputSchema: z.ZodType<Prisma.BlokUncheckedCreateWithoutBlokMetadataInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BloksDocument: z.lazy(() => BloksDocumentUncheckedCreateNestedManyWithoutBlokInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUncheckedCreateNestedManyWithoutBlokInputSchema).optional()
}).strict();

export default BlokUncheckedCreateWithoutBlokMetadataInputSchema;
