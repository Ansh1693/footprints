import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithoutUserInputSchema } from './DocumentUpdateWithoutUserInputSchema';
import { DocumentUncheckedUpdateWithoutUserInputSchema } from './DocumentUncheckedUpdateWithoutUserInputSchema';

export const DocumentUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutUserInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default DocumentUpdateWithWhereUniqueWithoutUserInputSchema;
