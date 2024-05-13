import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BloksDocumentCreateNestedManyWithoutBlokInputSchema } from './BloksDocumentCreateNestedManyWithoutBlokInputSchema';
import { BlokMetadataCreateNestedOneWithoutBlokInputSchema } from './BlokMetadataCreateNestedOneWithoutBlokInputSchema';
import { BlokFollowersCreateNestedManyWithoutBlokInputSchema } from './BlokFollowersCreateNestedManyWithoutBlokInputSchema';

export const BlokCreateWithoutUserInputSchema: z.ZodType<Prisma.BlokCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BloksDocument: z.lazy(() => BloksDocumentCreateNestedManyWithoutBlokInputSchema).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataCreateNestedOneWithoutBlokInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersCreateNestedManyWithoutBlokInputSchema).optional()
}).strict();

export default BlokCreateWithoutUserInputSchema;
