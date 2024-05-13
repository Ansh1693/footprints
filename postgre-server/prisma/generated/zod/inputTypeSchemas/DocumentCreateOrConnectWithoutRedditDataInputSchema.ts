import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutRedditDataInputSchema } from './DocumentCreateWithoutRedditDataInputSchema';
import { DocumentUncheckedCreateWithoutRedditDataInputSchema } from './DocumentUncheckedCreateWithoutRedditDataInputSchema';

export const DocumentCreateOrConnectWithoutRedditDataInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutRedditDataInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutRedditDataInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutRedditDataInputSchema;
