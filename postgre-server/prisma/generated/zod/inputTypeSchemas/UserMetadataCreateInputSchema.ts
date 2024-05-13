import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutUserMetadataInputSchema } from './UserCreateNestedOneWithoutUserMetadataInputSchema';

export const UserMetadataCreateInputSchema: z.ZodType<Prisma.UserMetadataCreateInput> = z.object({
  id: z.string().cuid().optional(),
  profileImage: z.string().optional().nullable(),
  profileBanner: z.string().optional().nullable(),
  status: z.lazy(() => StatusSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutUserMetadataInputSchema).optional()
}).strict();

export default UserMetadataCreateInputSchema;
