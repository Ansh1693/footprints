import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentMetadataCreateWithoutDocumentInputSchema } from './DocumentMetadataCreateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedCreateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedCreateWithoutDocumentInputSchema';
import { DocumentMetadataCreateOrConnectWithoutDocumentInputSchema } from './DocumentMetadataCreateOrConnectWithoutDocumentInputSchema';
import { DocumentMetadataUpsertWithoutDocumentInputSchema } from './DocumentMetadataUpsertWithoutDocumentInputSchema';
import { DocumentMetadataWhereInputSchema } from './DocumentMetadataWhereInputSchema';
import { DocumentMetadataWhereUniqueInputSchema } from './DocumentMetadataWhereUniqueInputSchema';
import { DocumentMetadataUpdateToOneWithWhereWithoutDocumentInputSchema } from './DocumentMetadataUpdateToOneWithWhereWithoutDocumentInputSchema';
import { DocumentMetadataUpdateWithoutDocumentInputSchema } from './DocumentMetadataUpdateWithoutDocumentInputSchema';
import { DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema } from './DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema';

export const DocumentMetadataUncheckedUpdateOneWithoutDocumentNestedInputSchema: z.ZodType<Prisma.DocumentMetadataUncheckedUpdateOneWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentMetadataCreateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentMetadataCreateOrConnectWithoutDocumentInputSchema).optional(),
  upsert: z.lazy(() => DocumentMetadataUpsertWithoutDocumentInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DocumentMetadataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DocumentMetadataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DocumentMetadataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentMetadataUpdateToOneWithWhereWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUpdateWithoutDocumentInputSchema),z.lazy(() => DocumentMetadataUncheckedUpdateWithoutDocumentInputSchema) ]).optional(),
}).strict();

export default DocumentMetadataUncheckedUpdateOneWithoutDocumentNestedInputSchema;
