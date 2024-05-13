import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StatusSchema } from './StatusSchema';
import { EnumStatusFieldUpdateOperationsInputSchema } from './EnumStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BloksDocumentUpdateManyWithoutBlokNestedInputSchema } from './BloksDocumentUpdateManyWithoutBlokNestedInputSchema';
import { BlokMetadataUpdateOneWithoutBlokNestedInputSchema } from './BlokMetadataUpdateOneWithoutBlokNestedInputSchema';
import { BlokFollowersUpdateManyWithoutBlokNestedInputSchema } from './BlokFollowersUpdateManyWithoutBlokNestedInputSchema';

export const BlokUpdateWithoutUserInputSchema: z.ZodType<Prisma.BlokUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  blokName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  BloksDocument: z.lazy(() => BloksDocumentUpdateManyWithoutBlokNestedInputSchema).optional(),
  BlokMetadata: z.lazy(() => BlokMetadataUpdateOneWithoutBlokNestedInputSchema).optional(),
  BlokFollowers: z.lazy(() => BlokFollowersUpdateManyWithoutBlokNestedInputSchema).optional()
}).strict();

export default BlokUpdateWithoutUserInputSchema;
