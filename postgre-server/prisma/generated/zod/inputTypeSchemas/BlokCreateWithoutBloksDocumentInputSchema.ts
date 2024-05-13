import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutBlokInputSchema } from './UserCreateNestedOneWithoutBlokInputSchema';
import { BlokMetadataCreateNestedOneWithoutBlokInputSchema } from './BlokMetadataCreateNestedOneWithoutBlokInputSchema';
import { BlokFollowersCreateNestedManyWithoutBlokInputSchema } from './BlokFollowersCreateNestedManyWithoutBlokInputSchema';

export const BlokCreateWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokCreateWithoutBloksDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutBlokInputSchema),
  BlokMetadata: z.lazy(() => BlokMetadataCreateNestedOneWithoutBlokInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersCreateNestedManyWithoutBlokInputSchema).optional()
}).strict();

export default BlokCreateWithoutBloksDocumentInputSchema;
