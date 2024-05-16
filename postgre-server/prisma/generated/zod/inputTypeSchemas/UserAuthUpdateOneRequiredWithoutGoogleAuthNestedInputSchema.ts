import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAuthCreateWithoutGoogleAuthInputSchema } from './UserAuthCreateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedCreateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedCreateWithoutGoogleAuthInputSchema';
import { UserAuthCreateOrConnectWithoutGoogleAuthInputSchema } from './UserAuthCreateOrConnectWithoutGoogleAuthInputSchema';
import { UserAuthUpsertWithoutGoogleAuthInputSchema } from './UserAuthUpsertWithoutGoogleAuthInputSchema';
import { UserAuthWhereUniqueInputSchema } from './UserAuthWhereUniqueInputSchema';
import { UserAuthUpdateToOneWithWhereWithoutGoogleAuthInputSchema } from './UserAuthUpdateToOneWithWhereWithoutGoogleAuthInputSchema';
import { UserAuthUpdateWithoutGoogleAuthInputSchema } from './UserAuthUpdateWithoutGoogleAuthInputSchema';
import { UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema } from './UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema';

export const UserAuthUpdateOneRequiredWithoutGoogleAuthNestedInputSchema: z.ZodType<Prisma.UserAuthUpdateOneRequiredWithoutGoogleAuthNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserAuthCreateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedCreateWithoutGoogleAuthInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserAuthCreateOrConnectWithoutGoogleAuthInputSchema).optional(),
  upsert: z.lazy(() => UserAuthUpsertWithoutGoogleAuthInputSchema).optional(),
  connect: z.lazy(() => UserAuthWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserAuthUpdateToOneWithWhereWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUpdateWithoutGoogleAuthInputSchema),z.lazy(() => UserAuthUncheckedUpdateWithoutGoogleAuthInputSchema) ]).optional(),
}).strict();

export default UserAuthUpdateOneRequiredWithoutGoogleAuthNestedInputSchema;
