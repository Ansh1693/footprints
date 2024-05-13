import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutRedditDataInputSchema } from './DocumentCreateWithoutRedditDataInputSchema';
import { DocumentUncheckedCreateWithoutRedditDataInputSchema } from './DocumentUncheckedCreateWithoutRedditDataInputSchema';
import { DocumentCreateOrConnectWithoutRedditDataInputSchema } from './DocumentCreateOrConnectWithoutRedditDataInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutRedditDataInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutRedditDataInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutRedditDataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutRedditDataInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict();

export default DocumentCreateNestedOneWithoutRedditDataInputSchema;
