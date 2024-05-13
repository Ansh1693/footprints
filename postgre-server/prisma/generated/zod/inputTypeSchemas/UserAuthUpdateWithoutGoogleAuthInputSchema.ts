import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutUserAuthNestedInputSchema } from './UserUpdateOneWithoutUserAuthNestedInputSchema';
import { RedditAuthUpdateOneWithoutUserAuthNestedInputSchema } from './RedditAuthUpdateOneWithoutUserAuthNestedInputSchema';

export const UserAuthUpdateWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthUpdateWithoutGoogleAuthInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneWithoutUserAuthNestedInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthUpdateOneWithoutUserAuthNestedInputSchema).optional()
}).strict();

export default UserAuthUpdateWithoutGoogleAuthInputSchema;
