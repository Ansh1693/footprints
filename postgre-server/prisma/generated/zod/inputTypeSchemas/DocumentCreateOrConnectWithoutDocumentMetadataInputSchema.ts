import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutDocumentMetadataInputSchema } from './DocumentCreateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedCreateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedCreateWithoutDocumentMetadataInputSchema';

export const DocumentCreateOrConnectWithoutDocumentMetadataInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutDocumentMetadataInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutDocumentMetadataInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutDocumentMetadataInputSchema;
