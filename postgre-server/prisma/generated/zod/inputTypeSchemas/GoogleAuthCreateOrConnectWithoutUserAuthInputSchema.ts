import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthWhereUniqueInputSchema } from './GoogleAuthWhereUniqueInputSchema';
import { GoogleAuthCreateWithoutUserAuthInputSchema } from './GoogleAuthCreateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedCreateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedCreateWithoutUserAuthInputSchema';

export const GoogleAuthCreateOrConnectWithoutUserAuthInputSchema: z.ZodType<Prisma.GoogleAuthCreateOrConnectWithoutUserAuthInput> = z.object({
  where: z.lazy(() => GoogleAuthWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GoogleAuthCreateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedCreateWithoutUserAuthInputSchema) ]),
}).strict();

export default GoogleAuthCreateOrConnectWithoutUserAuthInputSchema;
