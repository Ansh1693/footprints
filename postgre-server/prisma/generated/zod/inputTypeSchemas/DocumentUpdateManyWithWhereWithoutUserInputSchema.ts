import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema';
import { DocumentUpdateManyMutationInputSchema } from './DocumentUpdateManyMutationInputSchema';
import { DocumentUncheckedUpdateManyWithoutUserInputSchema } from './DocumentUncheckedUpdateManyWithoutUserInputSchema';

export const DocumentUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => DocumentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DocumentUpdateManyMutationInputSchema),z.lazy(() => DocumentUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default DocumentUpdateManyWithWhereWithoutUserInputSchema;
