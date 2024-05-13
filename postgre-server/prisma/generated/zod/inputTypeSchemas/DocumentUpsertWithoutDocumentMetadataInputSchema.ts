import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutDocumentMetadataInputSchema } from './DocumentUpdateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema';
import { DocumentCreateWithoutDocumentMetadataInputSchema } from './DocumentCreateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedCreateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedCreateWithoutDocumentMetadataInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutDocumentMetadataInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutDocumentMetadataInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutDocumentMetadataInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict();

export default DocumentUpsertWithoutDocumentMetadataInputSchema;
