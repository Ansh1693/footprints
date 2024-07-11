import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthUncheckedCreateNestedOneWithoutUserInputSchema } from './UserAuthUncheckedCreateNestedOneWithoutUserInputSchema';
import { DocumentUncheckedCreateNestedManyWithoutUserInputSchema } from './DocumentUncheckedCreateNestedManyWithoutUserInputSchema';
import { CommentsUncheckedCreateNestedManyWithoutUserInputSchema } from './CommentsUncheckedCreateNestedManyWithoutUserInputSchema';
import { TagUncheckedCreateNestedManyWithoutUserInputSchema } from './TagUncheckedCreateNestedManyWithoutUserInputSchema';
import { BlokUncheckedCreateNestedManyWithoutUserInputSchema } from './BlokUncheckedCreateNestedManyWithoutUserInputSchema';
import { BlokFollowersUncheckedCreateNestedManyWithoutUserInputSchema } from './BlokFollowersUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutUserMetadataInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserMetadataInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserAuth: z.lazy(() => UserAuthUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Comments: z.lazy(() => CommentsUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Blok: z.lazy(() => BlokUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutUserMetadataInputSchema;
