import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutPinterestDataInputSchema } from './DocumentCreateWithoutPinterestDataInputSchema';
import { DocumentUncheckedCreateWithoutPinterestDataInputSchema } from './DocumentUncheckedCreateWithoutPinterestDataInputSchema';

export const DocumentCreateOrConnectWithoutPinterestDataInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutPinterestDataInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutPinterestDataInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutPinterestDataInputSchema;
