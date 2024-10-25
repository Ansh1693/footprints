import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserMetadataInputSchema } from './UserCreateNestedOneWithoutUserMetadataInputSchema';

export const UserMetadataCreateInputSchema: z.ZodType<Prisma.UserMetadataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  profileImage: z.string().optional().nullable(),
  profileBanner: z.string().optional().nullable(),
  verified: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutUserMetadataInputSchema)
}).strict();

export default UserMetadataCreateInputSchema;
