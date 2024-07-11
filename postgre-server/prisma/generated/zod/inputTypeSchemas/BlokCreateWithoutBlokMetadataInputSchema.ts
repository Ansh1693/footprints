import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutBlokInputSchema } from './UserCreateNestedOneWithoutBlokInputSchema';
import { BloksDocumentCreateNestedManyWithoutBlokInputSchema } from './BloksDocumentCreateNestedManyWithoutBlokInputSchema';
import { BlokFollowersCreateNestedManyWithoutBlokInputSchema } from './BlokFollowersCreateNestedManyWithoutBlokInputSchema';

export const BlokCreateWithoutBlokMetadataInputSchema: z.ZodType<Prisma.BlokCreateWithoutBlokMetadataInput> = z.object({
  id: z.string().cuid().optional(),
  profileId: z.string(),
  blokName: z.string(),
  description: z.string().optional().nullable(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutBlokInputSchema),
  BloksDocument: z.lazy(() => BloksDocumentCreateNestedManyWithoutBlokInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersCreateNestedManyWithoutBlokInputSchema).optional()
}).strict();

export default BlokCreateWithoutBlokMetadataInputSchema;
