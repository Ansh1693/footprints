import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const UserMetadataUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserMetadataUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  profileImage: z.string().optional().nullable(),
  profileBanner: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserMetadataUncheckedCreateWithoutUserInputSchema;
