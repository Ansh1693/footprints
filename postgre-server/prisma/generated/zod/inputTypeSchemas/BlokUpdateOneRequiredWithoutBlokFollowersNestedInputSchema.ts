import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutBlokFollowersInputSchema } from './BlokCreateWithoutBlokFollowersInputSchema';
import { BlokUncheckedCreateWithoutBlokFollowersInputSchema } from './BlokUncheckedCreateWithoutBlokFollowersInputSchema';
import { BlokCreateOrConnectWithoutBlokFollowersInputSchema } from './BlokCreateOrConnectWithoutBlokFollowersInputSchema';
import { BlokUpsertWithoutBlokFollowersInputSchema } from './BlokUpsertWithoutBlokFollowersInputSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokUpdateToOneWithWhereWithoutBlokFollowersInputSchema } from './BlokUpdateToOneWithWhereWithoutBlokFollowersInputSchema';
import { BlokUpdateWithoutBlokFollowersInputSchema } from './BlokUpdateWithoutBlokFollowersInputSchema';
import { BlokUncheckedUpdateWithoutBlokFollowersInputSchema } from './BlokUncheckedUpdateWithoutBlokFollowersInputSchema';

export const BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema: z.ZodType<Prisma.BlokUpdateOneRequiredWithoutBlokFollowersNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokFollowersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokCreateOrConnectWithoutBlokFollowersInputSchema).optional(),
  upsert: z.lazy(() => BlokUpsertWithoutBlokFollowersInputSchema).optional(),
  connect: z.lazy(() => BlokWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlokUpdateToOneWithWhereWithoutBlokFollowersInputSchema),z.lazy(() => BlokUpdateWithoutBlokFollowersInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBlokFollowersInputSchema) ]).optional(),
}).strict();

export default BlokUpdateOneRequiredWithoutBlokFollowersNestedInputSchema;
