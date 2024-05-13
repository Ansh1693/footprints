import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutUserInputSchema } from './TagUncheckedUpdateManyWithoutUserInputSchema';

export const TagUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutUserInputSchema;
