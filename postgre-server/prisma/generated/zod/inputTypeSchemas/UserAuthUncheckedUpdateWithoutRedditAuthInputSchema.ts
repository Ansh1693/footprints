import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema } from './GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema';

export const UserAuthUncheckedUpdateWithoutRedditAuthInputSchema: z.ZodType<Prisma.UserAuthUncheckedUpdateWithoutRedditAuthInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GoogleAuth: z.lazy(() => GoogleAuthUncheckedUpdateOneWithoutUserAuthNestedInputSchema).optional()
}).strict();

export default UserAuthUncheckedUpdateWithoutRedditAuthInputSchema;
