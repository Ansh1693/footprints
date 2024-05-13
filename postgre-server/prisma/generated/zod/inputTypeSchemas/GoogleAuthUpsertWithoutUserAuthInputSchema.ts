import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthUpdateWithoutUserAuthInputSchema } from './GoogleAuthUpdateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema';
import { GoogleAuthCreateWithoutUserAuthInputSchema } from './GoogleAuthCreateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedCreateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedCreateWithoutUserAuthInputSchema';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';

export const GoogleAuthUpsertWithoutUserAuthInputSchema: z.ZodType<Prisma.GoogleAuthUpsertWithoutUserAuthInput> = z.object({
  update: z.union([ z.lazy(() => GoogleAuthUpdateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema) ]),
  create: z.union([ z.lazy(() => GoogleAuthCreateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedCreateWithoutUserAuthInputSchema) ]),
  where: z.lazy(() => GoogleAuthWhereInputSchema).optional()
}).strict();

export default GoogleAuthUpsertWithoutUserAuthInputSchema;
