import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataUpdateWithoutDocumentInputSchema } from './PinterestDataUpdateWithoutDocumentInputSchema';
import { PinterestDataUncheckedUpdateWithoutDocumentInputSchema } from './PinterestDataUncheckedUpdateWithoutDocumentInputSchema';
import { PinterestDataCreateWithoutDocumentInputSchema } from './PinterestDataCreateWithoutDocumentInputSchema';
import { PinterestDataUncheckedCreateWithoutDocumentInputSchema } from './PinterestDataUncheckedCreateWithoutDocumentInputSchema';
import { PinterestDataWhereInputSchema } from './PinterestDataWhereInputSchema';

export const PinterestDataUpsertWithoutDocumentInputSchema: z.ZodType<Prisma.PinterestDataUpsertWithoutDocumentInput> = z.object({
  update: z.union([ z.lazy(() => PinterestDataUpdateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => PinterestDataCreateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedCreateWithoutDocumentInputSchema) ]),
  where: z.lazy(() => PinterestDataWhereInputSchema).optional()
}).strict();

export default PinterestDataUpsertWithoutDocumentInputSchema;
