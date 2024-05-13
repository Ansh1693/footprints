import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutBloksDocumentInputSchema } from './DocumentUpdateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedUpdateWithoutBloksDocumentInputSchema } from './DocumentUncheckedUpdateWithoutBloksDocumentInputSchema';

export const DocumentUpdateToOneWithWhereWithoutBloksDocumentInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutBloksDocumentInput> = z.object({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutBloksDocumentInputSchema) ]),
}).strict();

export default DocumentUpdateToOneWithWhereWithoutBloksDocumentInputSchema;
