import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUncheckedCreateNestedOneWithoutUserMetadataInputSchema } from './UserUncheckedCreateNestedOneWithoutUserMetadataInputSchema';

export const UserMetadataUncheckedCreateInputSchema: z.ZodType<Prisma.UserMetadataUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  profileImage: z.string().optional().nullable(),
  profileBanner: z.string().optional().nullable(),
  verified: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserUncheckedCreateNestedOneWithoutUserMetadataInputSchema).optional()
}).strict();

export default UserMetadataUncheckedCreateInputSchema;
