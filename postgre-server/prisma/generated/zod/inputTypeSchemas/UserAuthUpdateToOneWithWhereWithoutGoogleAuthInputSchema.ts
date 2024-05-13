import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';
import { UserAuthUpdateWithoutGoogleAuthInputSchema } from './UserAuthUpdateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema';

export const UserAuthUpdateToOneWithWhereWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthUpdateToOneWithWhereWithoutGoogleAuthInput> = z.object({
  where: z.lazy(() => UserAuthWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserAuthUpdateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema) ]),
}).strict();

export default UserAuthUpdateToOneWithWhereWithoutGoogleAuthInputSchema;
