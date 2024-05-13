import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutTagsDocumentInputSchema } from './DocumentCreateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedCreateWithoutTagsDocumentInputSchema } from './DocumentUncheckedCreateWithoutTagsDocumentInputSchema';
import { DocumentCreateOrConnectWithoutTagsDocumentInputSchema } from './DocumentCreateOrConnectWithoutTagsDocumentInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutTagsDocumentInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutTagsDocumentInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutTagsDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutTagsDocumentInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict();

export default DocumentCreateNestedOneWithoutTagsDocumentInputSchema;
