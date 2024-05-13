import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutUserInputSchema } from './TagCreateWithoutUserInputSchema';
import { TagUncheckedCreateWithoutUserInputSchema } from './TagUncheckedCreateWithoutUserInputSchema';

export const TagCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutUserInputSchema),z.lazy(() => TagUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutUserInputSchema;
