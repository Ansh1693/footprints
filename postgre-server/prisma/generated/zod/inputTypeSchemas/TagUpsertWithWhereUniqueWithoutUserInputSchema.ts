import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutUserInputSchema } from './TagUpdateWithoutUserInputSchema';
import { TagUncheckedUpdateWithoutUserInputSchema } from './TagUncheckedUpdateWithoutUserInputSchema';
import { TagCreateWithoutUserInputSchema } from './TagCreateWithoutUserInputSchema';
import { TagUncheckedCreateWithoutUserInputSchema } from './TagUncheckedCreateWithoutUserInputSchema';

export const TagUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutUserInputSchema),z.lazy(() => TagUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutUserInputSchema),z.lazy(() => TagUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutUserInputSchema;
