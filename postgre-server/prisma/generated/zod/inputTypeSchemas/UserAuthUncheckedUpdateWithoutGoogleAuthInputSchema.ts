import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUncheckedUpdateOneWithoutUserAuthNestedInputSchema } from './UserUncheckedUpdateOneWithoutUserAuthNestedInputSchema';

export const UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedUpdateWithoutGoogleAuthInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  RedditAuthId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUncheckedUpdateOneWithoutUserAuthNestedInputSchema).optional()
}).strict();

export default UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema;
