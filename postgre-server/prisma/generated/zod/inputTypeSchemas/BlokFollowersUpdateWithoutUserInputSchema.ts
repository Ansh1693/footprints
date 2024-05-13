import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema } from './BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema';

export const BlokFollowersUpdateWithoutUserInputSchema: z.ZodType<Prisma.BlokFollowersUpdateWithoutUserInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Blok: z.lazy(() => BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema).optional()
}).strict();

export default BlokFollowersUpdateWithoutUserInputSchema;
