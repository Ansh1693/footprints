import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutCommentsInputSchema } from './DocumentUpdateWithoutCommentsInputSchema';
import { DocumentUncheckedUpdateWithoutCommentsInputSchema } from './DocumentUncheckedUpdateWithoutCommentsInputSchema';
import { DocumentCreateWithoutCommentsInputSchema } from './DocumentCreateWithoutCommentsInputSchema';
import { DocumentUncheckedCreateWithoutCommentsInputSchema } from './DocumentUncheckedCreateWithoutCommentsInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict();

export default DocumentUpsertWithoutCommentsInputSchema;
