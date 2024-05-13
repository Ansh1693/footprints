import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutDocumentMetadataInputSchema } from './DocumentUpdateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema';

export const DocumentUpdateToOneWithWhereWithoutDocumentMetadataInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutDocumentMetadataInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema) ]),
}).strict();

export default DocumentUpdateToOneWithWhereWithoutDocumentMetadataInputSchema;
