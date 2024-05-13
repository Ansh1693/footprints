import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokMetadataCreateWithoutBlokInputSchema } from './BlokMetadataCreateWithoutBlokInputSchema';
import { BlokMetadataUncheckedCreateWithoutBlokInputSchema } from './BlokMetadataUncheckedCreateWithoutBlokInputSchema';
import { BlokMetadataCreateOrConnectWithoutBlokInputSchema } from './BlokMetadataCreateOrConnectWithoutBlokInputSchema';
import { BlokMetadataUpsertWithoutBlokInputSchema } from './BlokMetadataUpsertWithoutBlokInputSchema';
import { BlokMetadataWhereInputSchema } from './BlokMetadataWhereInputSchema';
import { BlokMetadataWhereUniqueInputSchema } from './BlokMetadataWhereUniqueInputSchema';
import { BlokMetadataUpdateToOneWithWhereWithoutBlokInputSchema } from './BlokMetadataUpdateToOneWithWhereWithoutBlokInputSchema';
import { BlokMetadataUpdateWithoutBlokInputSchema } from './BlokMetadataUpdateWithoutBlokInputSchema';
import { BlokMetadataUncheckedUpdateWithoutBlokInputSchema } from './BlokMetadataUncheckedUpdateWithoutBlokInputSchema';

export const BlokMetadataUpdateOneWithoutBlokNestedInputSchema: z.ZodType<Prisma.BlokMetadataUpdateOneWithoutBlokNestedInput> = z.object({
  create: z.union([ z.lazy(() => BlokMetadataCreateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedCreateWithoutBlokInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlokMetadataCreateOrConnectWithoutBlokInputSchema).optional(),
  upsert: z.lazy(() => BlokMetadataUpsertWithoutBlokInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BlokMetadataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BlokMetadataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BlokMetadataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlokMetadataUpdateToOneWithWhereWithoutBlokInputSchema),z.lazy(() => BlokMetadataUpdateWithoutBlokInputSchema),z.lazy(() => BlokMetadataUncheckedUpdateWithoutBlokInputSchema) ]).optional(),
}).strict();

export default BlokMetadataUpdateOneWithoutBlokNestedInputSchema;
