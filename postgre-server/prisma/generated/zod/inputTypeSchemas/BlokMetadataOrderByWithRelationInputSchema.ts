import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BlokOrderByWithRelationInputSchema } from './BlokOrderByWithRelationInputSchema';

export const BlokMetadataOrderByWithRelationInputSchema: z.ZodType<Prisma.BlokMetadataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  blokHeader: z.lazy(() => SortOrderSchema).optional(),
  blokId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Blok: z.lazy(() => BlokOrderByWithRelationInputSchema).optional()
}).strict();

export default BlokMetadataOrderByWithRelationInputSchema;
