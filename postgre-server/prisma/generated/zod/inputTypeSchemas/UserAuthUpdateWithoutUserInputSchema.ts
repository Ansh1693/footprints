import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { GoogleAuthUpdateOneWithoutUserAuthNestedInputSchema } from './GoogleAuthUpdateOneWithoutUserAuthNestedInputSchema';
import { RedditAuthUpdateOneWithoutUserAuthNestedInputSchema } from './RedditAuthUpdateOneWithoutUserAuthNestedInputSchema';

export const UserAuthUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserAuthUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GoogleAuth: z.lazy(() => GoogleAuthUpdateOneWithoutUserAuthNestedInputSchema).optional(),
  RedditAuth: z.lazy(() => RedditAuthUpdateOneWithoutUserAuthNestedInputSchema).optional()
}).strict();

export default UserAuthUpdateWithoutUserInputSchema;
