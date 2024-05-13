import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateNestedOneWithoutPinterestDataInputSchema } from './DocumentCreateNestedOneWithoutPinterestDataInputSchema';

export const PinterestDataCreateInputSchema: z.ZodType<Prisma.PinterestDataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional().nullable(),
  postId: z.string().optional().nullable(),
  Document: z.lazy(() => DocumentCreateNestedOneWithoutPinterestDataInputSchema)
}).strict();

export default PinterestDataCreateInputSchema;
