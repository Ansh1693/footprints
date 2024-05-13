import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataWhereInputSchema } from './PinterestDataWhereInputSchema';
import { PinterestDataUpdateWithoutDocumentInputSchema } from './PinterestDataUpdateWithoutDocumentInputSchema';
import { PinterestDataUncheckedUpdateWithoutDocumentInputSchema } from './PinterestDataUncheckedUpdateWithoutDocumentInputSchema';

export const PinterestDataUpdateToOneWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.PinterestDataUpdateToOneWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => PinterestDataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PinterestDataUpdateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default PinterestDataUpdateToOneWithWhereWithoutDocumentInputSchema;
