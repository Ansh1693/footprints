import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataCreateWithoutDocumentInputSchema } from './PinterestDataCreateWithoutDocumentInputSchema';
import { PinterestDataUncheckedCreateWithoutDocumentInputSchema } from './PinterestDataUncheckedCreateWithoutDocumentInputSchema';
import { PinterestDataCreateOrConnectWithoutDocumentInputSchema } from './PinterestDataCreateOrConnectWithoutDocumentInputSchema';
import { PinterestDataWhereUniqueInputSchema } from './PinterestDataWhereUniqueInputSchema';

export const PinterestDataCreateNestedOneWithoutDocumentInputSchema: z.ZodType<Prisma.PinterestDataCreateNestedOneWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => PinterestDataCreateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PinterestDataCreateOrConnectWithoutDocumentInputSchema).optional(),
  connect: z.lazy(() => PinterestDataWhereUniqueInputSchema).optional()
}).strict();

export default PinterestDataCreateNestedOneWithoutDocumentInputSchema;
