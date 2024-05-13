import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutDocumentMetadataInputSchema } from './DocumentCreateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedCreateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedCreateWithoutDocumentMetadataInputSchema';
import { DocumentCreateOrConnectWithoutDocumentMetadataInputSchema } from './DocumentCreateOrConnectWithoutDocumentMetadataInputSchema';
import { DocumentUpsertWithoutDocumentMetadataInputSchema } from './DocumentUpsertWithoutDocumentMetadataInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutDocumentMetadataInputSchema } from './DocumentUpdateToOneWithWhereWithoutDocumentMetadataInputSchema';
import { DocumentUpdateWithoutDocumentMetadataInputSchema } from './DocumentUpdateWithoutDocumentMetadataInputSchema';
import { DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema } from './DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema';

export const DocumentUpdateOneRequiredWithoutDocumentMetadataNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutDocumentMetadataNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutDocumentMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutDocumentMetadataInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutDocumentMetadataInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUpdateWithoutDocumentMetadataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutDocumentMetadataInputSchema) ]).optional(),
}).strict();

export default DocumentUpdateOneRequiredWithoutDocumentMetadataNestedInputSchema;
