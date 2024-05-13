import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserMetadataCreateWithoutUserInputSchema } from './UserMetadataCreateWithoutUserInputSchema';
import { UserMetadataUncheckedCreateWithoutUserInputSchema } from './UserMetadataUncheckedCreateWithoutUserInputSchema';
import { UserMetadataCreateOrConnectWithoutUserInputSchema } from './UserMetadataCreateOrConnectWithoutUserInputSchema';
import { UserMetadataUpsertWithoutUserInputSchema } from './UserMetadataUpsertWithoutUserInputSchema';
import { UserMetadataWhereUniqueInputSchema } from './UserMetadataWhereUniqueInputSchema';
import { UserMetadataUpdateToOneWithWhereWithoutUserInputSchema } from './UserMetadataUpdateToOneWithWhereWithoutUserInputSchema';
import { UserMetadataUpdateWithoutUserInputSchema } from './UserMetadataUpdateWithoutUserInputSchema';
import { UserMetadataUncheckedUpdateWithoutUserInputSchema } from './UserMetadataUncheckedUpdateWithoutUserInputSchema';

export const UserMetadataUpdateOneRequiredWithoutUserNestedInputSchema: z.ZodType<Prisma.UserMetadataUpdateOneRequiredWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserMetadataCreateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserMetadataCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => UserMetadataUpsertWithoutUserInputSchema).optional(),
  connect: z.lazy(() => UserMetadataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserMetadataUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => UserMetadataUpdateWithoutUserInputSchema),z.lazy(() => UserMetadataUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default UserMetadataUpdateOneRequiredWithoutUserNestedInputSchema;
