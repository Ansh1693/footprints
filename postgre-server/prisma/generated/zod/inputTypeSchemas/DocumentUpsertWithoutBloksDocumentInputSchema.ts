import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutBloksDocumentInputSchema } from './DocumentUpdateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedUpdateWithoutBloksDocumentInputSchema } from './DocumentUncheckedUpdateWithoutBloksDocumentInputSchema';
import { DocumentCreateWithoutBloksDocumentInputSchema } from './DocumentCreateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedCreateWithoutBloksDocumentInputSchema } from './DocumentUncheckedCreateWithoutBloksDocumentInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutBloksDocumentInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutBloksDocumentInput> = z.object({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutBloksDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutBloksDocumentInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict();

export default DocumentUpsertWithoutBloksDocumentInputSchema;
