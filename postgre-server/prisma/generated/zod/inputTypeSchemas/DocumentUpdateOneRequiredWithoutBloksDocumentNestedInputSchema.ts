import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutBloksDocumentInputSchema } from './DocumentCreateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedCreateWithoutBloksDocumentInputSchema } from './DocumentUncheckedCreateWithoutBloksDocumentInputSchema';
import { DocumentCreateOrConnectWithoutBloksDocumentInputSchema } from './DocumentCreateOrConnectWithoutBloksDocumentInputSchema';
import { DocumentUpsertWithoutBloksDocumentInputSchema } from './DocumentUpsertWithoutBloksDocumentInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutBloksDocumentInputSchema } from './DocumentUpdateToOneWithWhereWithoutBloksDocumentInputSchema';
import { DocumentUpdateWithoutBloksDocumentInputSchema } from './DocumentUpdateWithoutBloksDocumentInputSchema';
import { DocumentUncheckedUpdateWithoutBloksDocumentInputSchema } from './DocumentUncheckedUpdateWithoutBloksDocumentInputSchema';

export const DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutBloksDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutBloksDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutBloksDocumentInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutBloksDocumentInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUpdateWithoutBloksDocumentInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutBloksDocumentInputSchema) ]).optional(),
}).strict();

export default DocumentUpdateOneRequiredWithoutBloksDocumentNestedInputSchema;
