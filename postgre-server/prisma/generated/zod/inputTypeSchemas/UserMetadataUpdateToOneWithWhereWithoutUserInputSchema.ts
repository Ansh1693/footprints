import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataWhereInputSchema } from './UserMetadataWhereInputSchema';
import { UserMetadataUpdateWithoutUserInputSchema } from './UserMetadataUpdateWithoutUserInputSchema';
import { UserMetadataUncheckedUpdateWithoutUserInputSchema } from './UserMetadataUncheckedUpdateWithoutUserInputSchema';

export const UserMetadataUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserMetadataUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => UserMetadataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserMetadataUpdateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default UserMetadataUpdateToOneWithWhereWithoutUserInputSchema;
