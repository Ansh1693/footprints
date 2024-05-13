import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataUpdateWithoutDocumentInputSchema } from './DocumentMetadataUpdateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema';
import { DocumentMetadataCreateWithoutDocumentInputSchema } from './DocumentMetadataCreateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedCreateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedCreateWithoutDocumentInputSchema';
import { DocumentMetadataWhereInputSchema } from './DocumentMetadataWhereInputSchema';

export const DocumentMetadataUpsertWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataUpsertWithoutDocumentInput> = z.object({
  update: z.union([ z.lazy(() => DocumentMetadataUpdateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentMetadataCreateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedCreateWithoutDocumentInputSchema) ]),
  where: z.lazy(() => DocumentMetadataWhereInputSchema).optional()
}).strict();

export default DocumentMetadataUpsertWithoutDocumentInputSchema;
