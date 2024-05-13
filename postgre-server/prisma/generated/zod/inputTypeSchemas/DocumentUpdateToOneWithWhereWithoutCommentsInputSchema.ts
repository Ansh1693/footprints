import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutCommentsInputSchema } from './DocumentUpdateWithoutCommentsInputSchema';
import { DocumentUncheckedUpdateWithoutCommentsInputSchema } from './DocumentUncheckedUpdateWithoutCommentsInputSchema';

export const DocumentUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export default DocumentUpdateToOneWithWhereWithoutCommentsInputSchema;
