import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutTagsDocumentInputSchema } from './DocumentUpdateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedUpdateWithoutTagsDocumentInputSchema } from './DocumentUncheckedUpdateWithoutTagsDocumentInputSchema';
import { DocumentCreateWithoutTagsDocumentInputSchema } from './DocumentCreateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedCreateWithoutTagsDocumentInputSchema } from './DocumentUncheckedCreateWithoutTagsDocumentInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutTagsDocumentInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutTagsDocumentInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutTagsDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutTagsDocumentInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict();

export default DocumentUpsertWithoutTagsDocumentInputSchema;
