import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GoogleAuthWhereInputSchema } from './GoogleAuthWhereInputSchema';
import { GoogleAuthUpdateWithoutUserAuthInputSchema } from './GoogleAuthUpdateWithoutUserAuthInputSchema';
import { GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema } from './GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema';

export const GoogleAuthUpdateToOneWithWhereWithoutUserAuthInputSchema: z.ZodType<Prisma.GoogleAuthUpdateToOneWithWhereWithoutUserAuthInput> = z.object({
  where: z.lazy(() => GoogleAuthWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GoogleAuthUpdateWithoutUserAuthInputSchema),z.lazy(() => GoogleAuthUncheckedUpdateWithoutUserAuthInputSchema) ]),
}).strict();

export default GoogleAuthUpdateToOneWithWhereWithoutUserAuthInputSchema;
