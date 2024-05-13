import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataSelectSchema } from '../inputTypeSchemas/UserMetadataSelectSchema';
import { UserMetadataIncludeSchema } from '../inputTypeSchemas/UserMetadataIncludeSchema';

export const UserMetadataArgsSchema: z.ZodType<Prisma.UserMetadataDefaultArgs> = z.object({
  select: z.lazy(() => UserMetadataSelectSchema).optional(),
  include: z.lazy(() => UserMetadataIncludeSchema).optional(),
}).strict();

export default UserMetadataArgsSchema;
