import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataCreateNestedOneWithoutUserInputSchema } from './UserMetadataCreateNestedOneWithoutUserInputSchema';
import { UserAuthCreateNestedOneWithoutUserInputSchema } from './UserAuthCreateNestedOneWithoutUserInputSchema';
import { DocumentCreateNestedManyWithoutUserInputSchema } from './DocumentCreateNestedManyWithoutUserInputSchema';
import { CommentsCreateNestedManyWithoutUserInputSchema } from './CommentsCreateNestedManyWithoutUserInputSchema';
import { TagCreateNestedManyWithoutUserInputSchema } from './TagCreateNestedManyWithoutUserInputSchema';
import { BlokFollowersCreateNestedManyWithoutUserInputSchema } from './BlokFollowersCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutBlokInputSchema: z.ZodType<Prisma.UserCreateWithoutBlokInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserMetadata: z.lazy(() => UserMetadataCreateNestedOneWithoutUserInputSchema).optional(),
  UserAuth: z.lazy(() => UserAuthCreateNestedOneWithoutUserInputSchema).optional(),
  Document: z.lazy(() => DocumentCreateNestedManyWithoutUserInputSchema).optional(),
  Comments: z.lazy(() => CommentsCreateNestedManyWithoutUserInputSchema).optional(),
  Tags: z.lazy(() => TagCreateNestedManyWithoutUserInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutBlokInputSchema;
