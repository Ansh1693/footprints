import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthUpdateWithoutGoogleAuthInputSchema } from './UserAuthUpdateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema';
import { UserAuthCreateWithoutGoogleAuthInputSchema } from './UserAuthCreateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedCreateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedCreateWithoutGoogleAuthInputSchema';
import { UserAuthWhereInputSchema } from './UserAuthWhereInputSchema';

export const UserAuthUpsertWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthUpsertWithoutGoogleAuthInput> = z.object({
  update: z.union([ z.lazy(() => UserAuthUpdateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema) ]),
  create: z.union([ z.lazy(() => UserAuthCreateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutGoogleAuthInputSchema) ]),
  where: z.lazy(() => UserAuthWhereInputSchema).optional()
}).strict();

export default UserAuthUpsertWithoutGoogleAuthInputSchema;
