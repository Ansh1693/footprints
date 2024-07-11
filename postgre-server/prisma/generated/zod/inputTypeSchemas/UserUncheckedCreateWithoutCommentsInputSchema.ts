import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataUncheckedCreateNestedOneWithoutUserInputSchema } from './UserMetadataUncheckedCreateNestedOneWithoutUserInputSchema';
import { UserAuthUncheckedCreateNestedOneWithoutUserInputSchema } from './UserAuthUncheckedCreateNestedOneWithoutUserInputSchema';
import { DocumentUncheckedCreateNestedManyWithoutUserInputSchema } from './DocumentUncheckedCreateNestedManyWithoutUserInputSchema';
import { TagUncheckedCreateNestedManyWithoutUserInputSchema } from './TagUncheckedCreateNestedManyWithoutUserInputSchema';
import { BlokUncheckedCreateNestedManyWithoutUserInputSchema } from './BlokUncheckedCreateNestedManyWithoutUserInputSchema';
import { BlokFollowersUncheckedCreateNestedManyWithoutUserInputSchema } from './BlokFollowersUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  username: z.string(),
  profileId: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  UserMetadata: z.lazy(() => UserMetadataUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  UserAuth: z.lazy(() => UserAuthUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Blok: z.lazy(() => BlokUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutCommentsInputSchema;
