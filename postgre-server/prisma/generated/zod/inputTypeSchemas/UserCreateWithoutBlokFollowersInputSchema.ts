import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataCreateNestedOneWithoutUserInputSchema } from './UserMetadataCreateNestedOneWithoutUserInputSchema';
import { UserAuthCreateNestedOneWithoutUserInputSchema } from './UserAuthCreateNestedOneWithoutUserInputSchema';
import { DocumentCreateNestedManyWithoutUserInputSchema } from './DocumentCreateNestedManyWithoutUserInputSchema';
import { CommentsCreateNestedManyWithoutUserInputSchema } from './CommentsCreateNestedManyWithoutUserInputSchema';
import { TagCreateNestedManyWithoutUserInputSchema } from './TagCreateNestedManyWithoutUserInputSchema';
import { BlokCreateNestedManyWithoutUserInputSchema } from './BlokCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserCreateWithoutBlokFollowersInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserMetadata: z.lazy(() => UserMetadataCreateNestedOneWithoutUserInputSchema).optional(),
  UserAuth: z.lazy(() => UserAuthCreateNestedOneWithoutUserInputSchema).optional(),
  Document: z.lazy(() => DocumentCreateNestedManyWithoutUserInputSchema).optional(),
  Comments: z.lazy(() => CommentsCreateNestedManyWithoutUserInputSchema).optional(),
  Tags: z.lazy(() => TagCreateNestedManyWithoutUserInputSchema).optional(),
  Blok: z.lazy(() => BlokCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutBlokFollowersInputSchema;
