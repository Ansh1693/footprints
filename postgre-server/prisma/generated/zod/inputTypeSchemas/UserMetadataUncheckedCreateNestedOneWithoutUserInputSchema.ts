import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataCreateWithoutUserInputSchema } from './UserMetadataCreateWithoutUserInputSchema';
import { UserMetadataUncheckedCreateWithoutUserInputSchema } from './UserMetadataUncheckedCreateWithoutUserInputSchema';
import { UserMetadataCreateOrConnectWithoutUserInputSchema } from './UserMetadataCreateOrConnectWithoutUserInputSchema';
import { UserMetadataWhereUniqueInputSchema } from './UserMetadataWhereUniqueInputSchema';

export const UserMetadataUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.UserMetadataUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => UserMetadataCreateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserMetadataCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserMetadataWhereUniqueInputSchema).optional()
}).strict();

export default UserMetadataUncheckedCreateNestedOneWithoutUserInputSchema;
