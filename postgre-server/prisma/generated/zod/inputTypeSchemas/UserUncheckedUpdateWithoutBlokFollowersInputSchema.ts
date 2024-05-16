import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserMetadataUncheckedUpdateOneWithoutUserNestedInputSchema } from './UserMetadataUncheckedUpdateOneWithoutUserNestedInputSchema';
import { UserAuthUncheckedUpdateOneWithoutUserNestedInputSchema } from './UserAuthUncheckedUpdateOneWithoutUserNestedInputSchema';
import { DocumentUncheckedUpdateManyWithoutUserNestedInputSchema } from './DocumentUncheckedUpdateManyWithoutUserNestedInputSchema';
import { CommentsUncheckedUpdateManyWithoutUserNestedInputSchema } from './CommentsUncheckedUpdateManyWithoutUserNestedInputSchema';
import { TagUncheckedUpdateManyWithoutUserNestedInputSchema } from './TagUncheckedUpdateManyWithoutUserNestedInputSchema';
import { BlokUncheckedUpdateManyWithoutUserNestedInputSchema } from './BlokUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutBlokFollowersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBlokFollowersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  UserMetadata: z.lazy(() => UserMetadataUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  UserAuth: z.lazy(() => UserAuthUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Document: z.lazy(() => DocumentUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Comments: z.lazy(() => CommentsUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Tags: z.lazy(() => TagUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Blok: z.lazy(() => BlokUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutBlokFollowersInputSchema;
