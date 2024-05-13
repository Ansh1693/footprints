import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataWhereUniqueInputSchema } from './UserMetadataWhereUniqueInputSchema';
import { UserMetadataCreateWithoutUserInputSchema } from './UserMetadataCreateWithoutUserInputSchema';
import { UserMetadataUncheckedCreateWithoutUserInputSchema } from './UserMetadataUncheckedCreateWithoutUserInputSchema';

export const UserMetadataCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserMetadataCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => UserMetadataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserMetadataCreateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default UserMetadataCreateOrConnectWithoutUserInputSchema;
