import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutPinterestDataInputSchema } from './DocumentCreateWithoutPinterestDataInputSchema';
import { DocumentUncheckedCreateWithoutPinterestDataInputSchema } from './DocumentUncheckedCreateWithoutPinterestDataInputSchema';
import { DocumentCreateOrConnectWithoutPinterestDataInputSchema } from './DocumentCreateOrConnectWithoutPinterestDataInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutPinterestDataInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutPinterestDataInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutPinterestDataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutPinterestDataInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict();

export default DocumentCreateNestedOneWithoutPinterestDataInputSchema;
