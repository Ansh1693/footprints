import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthSelectSchema } from '../inputTypeSchemas/UserAuthSelectSchema';
import { UserAuthIncludeSchema } from '../inputTypeSchemas/UserAuthIncludeSchema';

export const UserAuthArgsSchema: z.ZodType<Prisma.UserAuthDefaultArgs> = z.object({
  select: z.lazy(() => UserAuthSelectSchema).optional(),
  include: z.lazy(() => UserAuthIncludeSchema).optional(),
}).strict();

export default UserAuthArgsSchema;
