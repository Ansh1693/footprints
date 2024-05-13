import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutUserInputSchema } from './TagCreateWithoutUserInputSchema';
import { TagUncheckedCreateWithoutUserInputSchema } from './TagUncheckedCreateWithoutUserInputSchema';
import { TagCreateOrConnectWithoutUserInputSchema } from './TagCreateOrConnectWithoutUserInputSchema';
import { TagCreateManyUserInputEnvelopeSchema } from './TagCreateManyUserInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutUserInputSchema),z.lazy(() => TagCreateWithoutUserInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutUserInputSchema),z.lazy(() => TagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutUserInputSchema),z.lazy(() => TagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedCreateNestedManyWithoutUserInputSchema;
