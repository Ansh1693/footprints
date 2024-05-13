import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateNestedOneWithoutBlokMetadataInputSchema } from './BlokCreateNestedOneWithoutBlokMetadataInputSchema';

export const BlokMetadataCreateInputSchema: z.ZodType<Prisma.BlokMetadataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  blokHeader: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Blok: z.lazy(() => BlokCreateNestedOneWithoutBlokMetadataInputSchema)
}).strict();

export default BlokMetadataCreateInputSchema;
