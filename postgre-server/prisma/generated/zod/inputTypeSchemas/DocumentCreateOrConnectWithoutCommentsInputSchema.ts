import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutCommentsInputSchema } from './DocumentCreateWithoutCommentsInputSchema';
import { DocumentUncheckedCreateWithoutCommentsInputSchema } from './DocumentUncheckedCreateWithoutCommentsInputSchema';

export const DocumentCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutCommentsInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutCommentsInputSchema;
