import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutDocumentMetadataInputSchema } from './DocumentCreateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedCreateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedCreateWithoutDocumentMetadataInputSchema';
import { DocumentCreateOrConnectWithoutDocumentMetadataInputSchema } from './DocumentCreateOrConnectWithoutDocumentMetadataInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutDocumentMetadataInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutDocumentMetadataInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutDocumentMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutDocumentMetadataInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict();

export default DocumentCreateNestedOneWithoutDocumentMetadataInputSchema;
