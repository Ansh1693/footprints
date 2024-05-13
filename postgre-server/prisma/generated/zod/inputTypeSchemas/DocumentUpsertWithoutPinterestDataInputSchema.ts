import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutPinterestDataInputSchema } from './DocumentUpdateWithoutPinterestDataInputSchema';
import { DocumentUncheckedUpdateWithoutPinterestDataInputSchema } from './DocumentUncheckedUpdateWithoutPinterestDataInputSchema';
import { DocumentCreateWithoutPinterestDataInputSchema } from './DocumentCreateWithoutPinterestDataInputSchema';
import { DocumentUncheckedCreateWithoutPinterestDataInputSchema } from './DocumentUncheckedCreateWithoutPinterestDataInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutPinterestDataInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutPinterestDataInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutPinterestDataInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutPinterestDataInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict();

export default DocumentUpsertWithoutPinterestDataInputSchema;
