import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutTagsDocumentInputSchema } from './DocumentUpdateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedUpdateWithoutTagsDocumentInputSchema } from './DocumentUncheckedUpdateWithoutTagsDocumentInputSchema';

export const DocumentUpdateToOneWithWhereWithoutTagsDocumentInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutTagsDocumentInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutTagsDocumentInputSchema) ]),
}).strict();

export default DocumentUpdateToOneWithWhereWithoutTagsDocumentInputSchema;
