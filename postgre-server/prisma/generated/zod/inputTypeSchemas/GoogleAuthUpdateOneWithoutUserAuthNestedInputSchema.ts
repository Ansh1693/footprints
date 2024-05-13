import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthCreateWithoutUserAuthInputSchema } from './GoogleAuthCreateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedCreateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedCreateWithoutUserAuthInputSchema';
import { GoogleAuthCreateOrConnectWithoutUserAuthInputSchema } from './GoogleAuthCreateOrConnectWithoutUserAuthInputSchema';
import { GoogleAuthUpsertWithoutUserAuthInputSchema } from './GoogleAuthUpsertWithoutUserAuthInputSchema';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';
import { GoogleAuthWhereUniqueInputSchema } from './GoogleAuthWhereUniqueInputSchema';
import { GoogleAuthUpdateToOneWithWhereWithoutUserAuthInputSchema } from './GoogleAuthUpdateToOneWithWhereWithoutUserAuthInputSchema';
import { GoogleAuthUpdateWithoutUserAuthInputSchema } from './GoogleAuthUpdateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema';

export const GoogleAuthUpdateOneWithoutUserAuthNestedInputSchema: z.ZodType<Prisma.GoogleAuthUpdateOneWithoutUserAuthNestedInput> = z.object({
  create: z.union([ z.lazy(() => GoogleAuthCreateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedCreateWithoutUserAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GoogleAuthCreateOrConnectWithoutUserAuthInputSchema).optional(),
  upsert: z.lazy(() => GoogleAuthUpsertWithoutUserAuthInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GoogleAuthWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GoogleAuthWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GoogleAuthWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GoogleAuthUpdateToOneWithWhereWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUpdateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema) ]).optional(),
}).strict();

export default GoogleAuthUpdateOneWithoutUserAuthNestedInputSchema;
