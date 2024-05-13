import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BlokUpdateOneRequiredWithoutBlokMetadataNestedInputSchema } from './BlokUpdateOneRequiredWithoutBlokMetadataNestedInputSchema';

export const BlokMetadataUpdateInputSchema: z.ZodType<Prisma.BlokMetadataUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  blokHeader: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Blok: z.lazy(() => BlokUpdateOneRequiredWithoutBlokMetadataNestedInputSchema).optional()
}).strict();

export default BlokMetadataUpdateInputSchema;
