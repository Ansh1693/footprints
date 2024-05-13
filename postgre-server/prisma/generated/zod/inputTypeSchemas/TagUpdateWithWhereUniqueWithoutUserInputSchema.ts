import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutUserInputSchema } from './TagUpdateWithoutUserInputSchema';
import { TagUncheckedUpdateWithoutUserInputSchema } from './TagUncheckedUpdateWithoutUserInputSchema';

export const TagUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutUserInputSchema),z.lazy(() => TagUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutUserInputSchema;
