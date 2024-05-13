import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataUpdateWithoutUserInputSchema } from './UserMetadataUpdateWithoutUserInputSchema';
import { UserMetadataUncheckedUpdateWithoutUserInputSchema } from './UserMetadataUncheckedUpdateWithoutUserInputSchema';
import { UserMetadataCreateWithoutUserInputSchema } from './UserMetadataCreateWithoutUserInputSchema';
import { UserMetadataUncheckedCreateWithoutUserInputSchema } from './UserMetadataUncheckedCreateWithoutUserInputSchema';
import { UserMetadataWhereInputSchema } from './UserMetadataWhereInputSchema';

export const UserMetadataUpsertWithoutUserInputSchema: z.ZodType<Prisma.UserMetadataUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => UserMetadataUpdateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserMetadataCreateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => UserMetadataWhereInputSchema).optional()
}).strict();

export default UserMetadataUpsertWithoutUserInputSchema;
