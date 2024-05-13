import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthCreateWithoutGoogleAuthInputSchema } from './UserAuthCreateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedCreateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedCreateWithoutGoogleAuthInputSchema';

export const UserAuthCreateOrConnectWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthCreateOrConnectWithoutGoogleAuthInput> = z.object({
  where: z.lazy(() => UserAuthWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserAuthCreateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutGoogleAuthInputSchema) ]),
}).strict();

export default UserAuthCreateOrConnectWithoutGoogleAuthInputSchema;
