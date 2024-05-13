import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutCommentsInputSchema } from './DocumentCreateWithoutCommentsInputSchema';
import { DocumentUncheckedCreateWithoutCommentsInputSchema } from './DocumentUncheckedCreateWithoutCommentsInputSchema';
import { DocumentCreateOrConnectWithoutCommentsInputSchema } from './DocumentCreateOrConnectWithoutCommentsInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional()
}).strict();

export default DocumentCreateNestedOneWithoutCommentsInputSchema;
