import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutTagsDocumentInputSchema } from './DocumentCreateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedCreateWithoutTagsDocumentInputSchema } from './DocumentUncheckedCreateWithoutTagsDocumentInputSchema';
import { DocumentCreateOrConnectWithoutTagsDocumentInputSchema } from './DocumentCreateOrConnectWithoutTagsDocumentInputSchema';
import { DocumentUpsertWithoutTagsDocumentInputSchema } from './DocumentUpsertWithoutTagsDocumentInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutTagsDocumentInputSchema } from './DocumentUpdateToOneWithWhereWithoutTagsDocumentInputSchema';
import { DocumentUpdateWithoutTagsDocumentInputSchema } from './DocumentUpdateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedUpdateWithoutTagsDocumentInputSchema } from './DocumentUncheckedUpdateWithoutTagsDocumentInputSchema';

export const DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutTagsDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutTagsDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutTagsDocumentInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutTagsDocumentInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUpdateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutTagsDocumentInputSchema) ]).optional(),
}).strict();

export default DocumentUpdateOneRequiredWithoutTagsDocumentNestedInputSchema;
