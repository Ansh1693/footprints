import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutRedditDataInputSchema } from './DocumentUpdateWithoutRedditDataInputSchema';
import { DocumentUncheckedUpdateWithoutRedditDataInputSchema } from './DocumentUncheckedUpdateWithoutRedditDataInputSchema';

export const DocumentUpdateToOneWithWhereWithoutRedditDataInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutRedditDataInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutRedditDataInputSchema) ]),
}).strict();

export default DocumentUpdateToOneWithWhereWithoutRedditDataInputSchema;
