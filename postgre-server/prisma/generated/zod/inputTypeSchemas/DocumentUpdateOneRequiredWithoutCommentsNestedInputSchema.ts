import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutCommentsInputSchema } from './DocumentCreateWithoutCommentsInputSchema';
import { DocumentUncheckedCreateWithoutCommentsInputSchema } from './DocumentUncheckedCreateWithoutCommentsInputSchema';
import { DocumentCreateOrConnectWithoutCommentsInputSchema } from './DocumentCreateOrConnectWithoutCommentsInputSchema';
import { DocumentUpsertWithoutCommentsInputSchema } from './DocumentUpsertWithoutCommentsInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutCommentsInputSchema } from './DocumentUpdateToOneWithWhereWithoutCommentsInputSchema';
import { DocumentUpdateWithoutCommentsInputSchema } from './DocumentUpdateWithoutCommentsInputSchema';
import { DocumentUncheckedUpdateWithoutCommentsInputSchema } from './DocumentUncheckedUpdateWithoutCommentsInputSchema';

export const DocumentUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => DocumentUpdateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export default DocumentUpdateOneRequiredWithoutCommentsNestedInputSchema;
