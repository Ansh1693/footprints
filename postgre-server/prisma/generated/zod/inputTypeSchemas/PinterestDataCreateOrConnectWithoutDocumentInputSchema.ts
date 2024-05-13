import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataWhereUniqueInputSchema } from './PinterestDataWhereUniqueInputSchema';
import { PinterestDataCreateWithoutDocumentInputSchema } from './PinterestDataCreateWithoutDocumentInputSchema';
import { PinterestDataUncheckedCreateWithoutDocumentInputSchema } from './PinterestDataUncheckedCreateWithoutDocumentInputSchema';

export const PinterestDataCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.PinterestDataCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => PinterestDataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PinterestDataCreateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default PinterestDataCreateOrConnectWithoutDocumentInputSchema;
