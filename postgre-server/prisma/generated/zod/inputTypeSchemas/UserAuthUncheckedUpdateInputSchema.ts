import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema } from './GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema';
import { RedditAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema } from './RedditAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema';

export const UserAuthUncheckedUpdateInputSchema: z.ZodType<Prisma.UserAuthUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GoogleAuth: z.lazy(() => GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema).optional()
}).strict();

export default UserAuthUncheckedUpdateInputSchema;
