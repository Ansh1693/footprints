import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataWhereInputSchema } from './DocumentMetadataWhereInputSchema';
import { DocumentMetadataUpdateWithoutDocumentInputSchema } from './DocumentMetadataUpdateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema';

export const DocumentMetadataUpdateToOneWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataUpdateToOneWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentMetadataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentMetadataUpdateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default DocumentMetadataUpdateToOneWithWhereWithoutDocumentInputSchema;
