import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutUserInputSchema } from './TagCreateWithoutUserInputSchema';
import { TagUncheckedCreateWithoutUserInputSchema } from './TagUncheckedCreateWithoutUserInputSchema';
import { TagCreateOrConnectWithoutUserInputSchema } from './TagCreateOrConnectWithoutUserInputSchema';
import { TagUpsertWithWhereUniqueWithoutUserInputSchema } from './TagUpsertWithWhereUniqueWithoutUserInputSchema';
import { TagCreateManyUserInputEnvelopeSchema } from './TagCreateManyUserInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutUserInputSchema } from './TagUpdateWithWhereUniqueWithoutUserInputSchema';
import { TagUpdateManyWithWhereWithoutUserInputSchema } from './TagUpdateManyWithWhereWithoutUserInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutUserInputSchema),z.lazy(() => TagCreateWithoutUserInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutUserInputSchema),z.lazy(() => TagUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutUserInputSchema),z.lazy(() => TagCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedUpdateManyWithoutUserNestedInputSchema;
