import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataCreateNestedOneWithoutUserInputSchema } from './UserMetadataCreateNestedOneWithoutUserInputSchema';
import { UserAuthCreateNestedOneWithoutUserInputSchema } from './UserAuthCreateNestedOneWithoutUserInputSchema';
import { CommentsCreateNestedManyWithoutUserInputSchema } from './CommentsCreateNestedManyWithoutUserInputSchema';
import { TagCreateNestedManyWithoutUserInputSchema } from './TagCreateNestedManyWithoutUserInputSchema';
import { BlokCreateNestedManyWithoutUserInputSchema } from './BlokCreateNestedManyWithoutUserInputSchema';
import { BlokFollowersCreateNestedManyWithoutUserInputSchema } from './BlokFollowersCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutDocumentInputSchema: z.ZodType<Prisma.UserCreateWithoutDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserMetadata: z.lazy(() => UserMetadataCreateNestedOneWithoutUserInputSchema),
  UserAuth: z.lazy(() => UserAuthCreateNestedOneWithoutUserInputSchema),
  Comments: z.lazy(() => CommentsCreateNestedManyWithoutUserInputSchema).optional(),
  Tags: z.lazy(() => TagCreateNestedManyWithoutUserInputSchema).optional(),
  Blok: z.lazy(() => BlokCreateNestedManyWithoutUserInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutDocumentInputSchema;
