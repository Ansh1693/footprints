import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokCreateWithoutBlokMetadataInputSchema } from './BlokCreateWithoutBlokMetadataInputSchema';
import { BlokUncheckedCreateWithoutBlokMetadataInputSchema } from './BlokUncheckedCreateWithoutBlokMetadataInputSchema';
import { BlokCreateOrConnectWithoutBlokMetadataInputSchema } from './BlokCreateOrConnectWithoutBlokMetadataInputSchema';
import { BlokUpsertWithoutBlokMetadataInputSchema } from './BlokUpsertWithoutBlokMetadataInputSchema';
import { BlokWhereUniqueInputSchema } from './BlokWhereUniqueInputSchema';
import { BlokUpdateToOneWithWhereWithoutBlokMetadataInputSchema } from './BlokUpdateToOneWithWhereWithoutBlokMetadataInputSchema';
import { BlokUpdateWithoutBlokMetadataInputSchema } from './BlokUpdateWithoutBlokMetadataInputSchema';
import { BlokUncheckedUpdateWithoutBlokMetadataInputSchema } from './BlokUncheckedUpdateWithoutBlokMetadataInputSchema';

export const BlokUpdateOneRequiredWithoutBlokMetadataNestedInputSchema: z.ZodType<Prisma.BlokUpdateOneRequiredWithoutBlokMetadataNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokCreateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedCreateWithoutBlokMetadataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokCreateOrConnectWithoutBlokMetadataInputSchema).optional(),
  upsert: z.lazy(() => BlokUpsertWithoutBlokMetadataInputSchema).optional(),
  connect: z.lazy(() => BlokWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlokUpdateToOneWithWhereWithoutBlokMetadataInputSchema),z.lazy(() => BlokUpdateWithoutBlokMetadataInputSchema),z.lazy(() => BlokUncheckedUpdateWithoutBlokMetadataInputSchema) ]).optional(),
}).strict();

export default BlokUpdateOneRequiredWithoutBlokMetadataNestedInputSchema;
