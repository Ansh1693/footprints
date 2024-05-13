import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutBloksDocumentInputSchema } from './DocumentCreateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedCreateWithoutBloksDocumentInputSchema } from './DocumentUncheckedCreateWithoutBloksDocumentInputSchema';
import { DocumentCreateOrConnectWithoutBloksDocumentInputSchema } from './DocumentCreateOrConnectWithoutBloksDocumentInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutBloksDocumentInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutBloksDocumentInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutBloksDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutBloksDocumentInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict();

export default DocumentCreateNestedOneWithoutBloksDocumentInputSchema;
