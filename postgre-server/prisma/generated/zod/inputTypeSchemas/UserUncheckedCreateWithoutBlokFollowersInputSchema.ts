import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUncheckedCreateNestedManyWithoutUserInputSchema } from './DocumentUncheckedCreateNestedManyWithoutUserInputSchema';
import { CommentsUncheckedCreateNestedManyWithoutUserInputSchema } from './CommentsUncheckedCreateNestedManyWithoutUserInputSchema';
import { TagUncheckedCreateNestedManyWithoutUserInputSchema } from './TagUncheckedCreateNestedManyWithoutUserInputSchema';
import { BlokUncheckedCreateNestedManyWithoutUserInputSchema } from './BlokUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBlokFollowersInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserMetadataId: z.string(),
  UserAuthId: z.string(),
  Document: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Comments: z.lazy(() => CommentsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Blok: z.lazy(() => BlokUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutBlokFollowersInputSchema;
