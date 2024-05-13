import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutTagsDocumentInputSchema } from './DocumentCreateWithoutTagsDocumentInputSchema';
import { DocumentUncheckedCreateWithoutTagsDocumentInputSchema } from './DocumentUncheckedCreateWithoutTagsDocumentInputSchema';

export const DocumentCreateOrConnectWithoutTagsDocumentInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutTagsDocumentInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutTagsDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutTagsDocumentInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutTagsDocumentInputSchema;
