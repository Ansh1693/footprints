import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthCreateWithoutUserAuthInputSchema } from './GoogleAuthCreateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedCreateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedCreateWithoutUserAuthInputSchema';
import { GoogleAuthCreateOrConnectWithoutUserAuthInputSchema } from './GoogleAuthCreateOrConnectWithoutUserAuthInputSchema';
import { GoogleAuthWhereUniqueInputSchema } from './GoogleAuthWhereUniqueInputSchema';

export const GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema: z.ZodType<Prisma.GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInput> = z.object({
  create: z.union([ z.lazy(() => GoogleAuthCreateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedCreateWithoutUserAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GoogleAuthCreateOrConnectWithoutUserAuthInputSchema).optional(),
  connect: z.lazy(() => GoogleAuthWhereUniqueInputSchema).optional()
}).strict();

export default GoogleAuthUncheckedCreateNestedOneWithoutUserAuthInputSchema;
