import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutBloksDocumentInputSchema } from './DocumentCreateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedCreateWithoutBloksDocumentInputSchema } from './DocumentUncheckedCreateWithoutBloksDocumentInputSchema';

export const DocumentCreateOrConnectWithoutBloksDocumentInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutBloksDocumentInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutBloksDocumentInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutBloksDocumentInputSchema;
