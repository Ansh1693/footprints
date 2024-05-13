import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataWhereUniqueInputSchema } from './DocumentMetadataWhereUniqueInputSchema';
import { DocumentMetadataCreateWithoutDocumentInputSchema } from './DocumentMetadataCreateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedCreateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedCreateWithoutDocumentInputSchema';

export const DocumentMetadataCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentMetadataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentMetadataCreateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default DocumentMetadataCreateOrConnectWithoutDocumentInputSchema;
