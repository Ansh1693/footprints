import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema } from './UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema';

export const BlokFollowersUpdateWithoutBlokInputSchema: z.ZodType<Prisma.BlokFollowersUpdateWithoutBlokInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutBlokFollowersNestedInputSchema).optional()
}).strict();

export default BlokFollowersUpdateWithoutBlokInputSchema;
