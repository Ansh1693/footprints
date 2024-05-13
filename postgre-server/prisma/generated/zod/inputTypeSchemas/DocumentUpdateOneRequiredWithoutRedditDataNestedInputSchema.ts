import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutRedditDataInputSchema } from './DocumentCreateWithoutRedditDataInputSchema';
import { DocumentUncheckedCreateWithoutRedditDataInputSchema } from './DocumentUncheckedCreateWithoutRedditDataInputSchema';
import { DocumentCreateOrConnectWithoutRedditDataInputSchema } from './DocumentCreateOrConnectWithoutRedditDataInputSchema';
import { DocumentUpsertWithoutRedditDataInputSchema } from './DocumentUpsertWithoutRedditDataInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutRedditDataInputSchema } from './DocumentUpdateToOneWithWhereWithoutRedditDataInputSchema';
import { DocumentUpdateWithoutRedditDataInputSchema } from './DocumentUpdateWithoutRedditDataInputSchema';
import { DocumentUncheckedUpdateWithoutRedditDataInputSchema } from './DocumentUncheckedUpdateWithoutRedditDataInputSchema';

export const DocumentUpdateOneRequiredWithoutRedditDataNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutRedditDataNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutRedditDataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutRedditDataInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutRedditDataInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutRedditDataInputSchema),z.lazy(() => DocumentUpdateWithoutRedditDataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutRedditDataInputSchema) ]).optional(),
}).strict();

export default DocumentUpdateOneRequiredWithoutRedditDataNestedInputSchema;
