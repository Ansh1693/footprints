import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutPinterestDataInputSchema } from './DocumentUpdateWithoutPinterestDataInputSchema';
import { DocumentUncheckedUpdateWithoutPinterestDataInputSchema } from './DocumentUncheckedUpdateWithoutPinterestDataInputSchema';

export const DocumentUpdateToOneWithWhereWithoutPinterestDataInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutPinterestDataInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutPinterestDataInputSchema) ]),
}).strict();

export default DocumentUpdateToOneWithWhereWithoutPinterestDataInputSchema;
