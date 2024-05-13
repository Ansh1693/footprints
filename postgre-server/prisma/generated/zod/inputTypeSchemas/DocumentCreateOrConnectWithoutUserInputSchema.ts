import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutUserInputSchema } from './DocumentCreateWithoutUserInputSchema';
import { DocumentUncheckedCreateWithoutUserInputSchema } from './DocumentUncheckedCreateWithoutUserInputSchema';

export const DocumentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutUserInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutUserInputSchema;
