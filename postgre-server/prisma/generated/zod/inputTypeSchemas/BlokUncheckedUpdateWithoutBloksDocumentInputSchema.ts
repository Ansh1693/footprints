import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BlokMetadataUncheckedUpdateOneWithoutBlokNestedInputSchema } from './BlokMetadataUncheckedUpdateOneWithoutBlokNestedInputSchema';
import { BlokFollowersUncheckedUpdateManyWithoutBlokNestedInputSchema } from './BlokFollowersUncheckedUpdateManyWithoutBlokNestedInputSchema';

export const BlokUncheckedUpdateWithoutBloksDocumentInputSchema: z.ZodType<Prisma.BlokUncheckedUpdateWithoutBloksDocumentInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  blokName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  public: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  deleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataUncheckedUpdateOneWithoutBlokNestedInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUncheckedUpdateManyWithoutBlokNestedInputSchema).optional()
}).strict();

export default BlokUncheckedUpdateWithoutBloksDocumentInputSchema;
