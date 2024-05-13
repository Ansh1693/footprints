import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema } from './BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema';
import { UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema } from './UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema';

export const BlokFollowersUpdateInputSchema: z.ZodType<Prisma.BlokFollowersUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Blok: z.lazy(() => BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema).optional()
}).strict();

export default BlokFollowersUpdateInputSchema;
