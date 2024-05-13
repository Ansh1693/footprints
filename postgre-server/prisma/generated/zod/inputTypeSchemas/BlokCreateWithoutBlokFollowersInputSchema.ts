import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutBlokInputSchema } from './UserCreateNestedOneWithoutBlokInputSchema';
import { BloksDocumentCreateNestedManyWithoutBlokInputSchema } from './BloksDocumentCreateNestedManyWithoutBlokInputSchema';
import { BlokMetadataCreateNestedOneWithoutBlokInputSchema } from './BlokMetadataCreateNestedOneWithoutBlokInputSchema';

export const BlokCreateWithoutBlokFollowersInputSchema: z.ZodType<Prisma.BlokCreateWithoutBlokFollowersInput> = z.object({
  id: z.string().cuid().optional(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutBlokInputSchema),
  BloksDocument: z.lazy(() => BloksDocumentCreateNestedManyWithoutBlokInputSchema).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataCreateNestedOneWithoutBlokInputSchema).optional()
}).strict();

export default BlokCreateWithoutBlokFollowersInputSchema;
