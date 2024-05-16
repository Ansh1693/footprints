import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema } from './GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema';
import { RedditAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema } from './RedditAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema';

export const UserAuthUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAuthUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GoogleAuth: z.lazy(() => GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema).optional()
}).strict();

export default UserAuthUncheckedUpdateWithoutUserInputSchema;
