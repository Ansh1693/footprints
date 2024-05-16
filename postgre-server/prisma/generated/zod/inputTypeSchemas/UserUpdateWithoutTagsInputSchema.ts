import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserMetadataUpdateOneWithoutUserNestedInputSchema } from './UserMetadataUpdateOneWithoutUserNestedInputSchema';
import { UserAuthUpdateOneWithoutUserNestedInputSchema } from './UserAuthUpdateOneWithoutUserNestedInputSchema';
import { DocumentUpdateManyWithoutUserNestedInputSchema } from './DocumentUpdateManyWithoutUserNestedInputSchema';
import { CommentsUpdateManyWithoutUserNestedInputSchema } from './CommentsUpdateManyWithoutUserNestedInputSchema';
import { BlokUpdateManyWithoutUserNestedInputSchema } from './BlokUpdateManyWithoutUserNestedInputSchema';
import { BlokFollowersUpdateManyWithoutUserNestedInputSchema } from './BlokFollowersUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutTagsInputSchema: z.ZodType<Prisma.UserUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UserMetadata: z.lazy(() => UserMetadataUpdateOneWithoutUserNestedInputSchema).optional(),
  UserAuth: z.lazy(() => UserAuthUpdateOneWithoutUserNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUpdateManyWithoutUserNestedInputSchema).optional(),
  Comments: z.lazy(() => CommentsUpdateManyWithoutUserNestedInputSchema).optional(),
  Blok: z.lazy(() => BlokUpdateManyWithoutUserNestedInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutTagsInputSchema;
