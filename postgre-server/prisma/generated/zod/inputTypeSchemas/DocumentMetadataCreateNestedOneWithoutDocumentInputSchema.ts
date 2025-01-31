import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataCreateWithoutDocumentInputSchema } from './DocumentMetadataCreateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedCreateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedCreateWithoutDocumentInputSchema';
import { DocumentMetadataCreateOrConnectWithoutDocumentInputSchema } from './DocumentMetadataCreateOrConnectWithoutDocumentInputSchema';
import { DocumentMetadataWhereUniqueInputSchema } from './DocumentMetadataWhereUniqueInputSchema';

export const DocumentMetadataCreateNestedOneWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentMetadataCreateNestedOneWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => DocumentMetadataCreateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentMetadataCreateOrConnectWithoutDocumentInputSchema).optional(),
  connect: z.lazy(() => DocumentMetadataWhereUniqueInputSchema).optional()
}).strict();

export default DocumentMetadataCreateNestedOneWithoutDocumentInputSchema;
