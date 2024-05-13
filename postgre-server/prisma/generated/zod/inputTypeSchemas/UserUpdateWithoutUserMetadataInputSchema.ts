import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserAuthUpdateOneRequiredWithoutUserNestedInputSchema } from './UserAuthUpdateOneRequiredWithoutUserNestedInputSchema';
import { DocumentUpdateManyWithoutUserNestedInputSchema } from './DocumentUpdateManyWithoutUserNestedInputSchema';
import { CommentsUpdateManyWithoutUserNestedInputSchema } from './CommentsUpdateManyWithoutUserNestedInputSchema';
import { TagUpdateManyWithoutUserNestedInputSchema } from './TagUpdateManyWithoutUserNestedInputSchema';
import { BlokUpdateManyWithoutUserNestedInputSchema } from './BlokUpdateManyWithoutUserNestedInputSchema';
import { BlokFollowersUpdateManyWithoutUserNestedInputSchema } from './BlokFollowersUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutUserMetadataInputSchema: z.ZodType<Prisma.UserUpdateWithoutUserMetadataInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UserAuth: z.lazy(() => UserAuthUpdateOneRequiredWithoutUserNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUpdateManyWithoutUserNestedInputSchema).optional(),
  Comments: z.lazy(() => CommentsUpdateManyWithoutUserNestedInputSchema).optional(),
  Tags: z.lazy(() => TagUpdateManyWithoutUserNestedInputSchema).optional(),
  Blok: z.lazy(() => BlokUpdateManyWithoutUserNestedInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutUserMetadataInputSchema;
