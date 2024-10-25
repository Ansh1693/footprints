import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutGoogleAuthInputSchema } from './UserAuthCreateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedCreateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedCreateWithoutGoogleAuthInputSchema';
import { UserAuthCreateOrConnectWithoutGoogleAuthInputSchema } from './UserAuthCreateOrConnectWithoutGoogleAuthInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';

export const UserAuthCreateNestedOneWithoutGoogleAuthInputSchema: z.ZodType<Prisma.UserAuthCreateNestedOneWithoutGoogleAuthInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutGoogleAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutGoogleAuthInputSchema).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional()
}).strict();

export default UserAuthCreateNestedOneWithoutGoogleAuthInputSchema;
