import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutRedditDataInputSchema } from './DocumentUpdateWithoutRedditDataInputSchema';
import { DocumentUncheckedUpdateWithoutRedditDataInputSchema } from './DocumentUncheckedUpdateWithoutRedditDataInputSchema';
import { DocumentCreateWithoutRedditDataInputSchema } from './DocumentCreateWithoutRedditDataInputSchema';
import { DocumentUncheckedCreateWithoutRedditDataInputSchema } from './DocumentUncheckedCreateWithoutRedditDataInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutRedditDataInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutRedditDataInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutRedditDataInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutRedditDataInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict();

export default DocumentUpsertWithoutRedditDataInputSchema;
