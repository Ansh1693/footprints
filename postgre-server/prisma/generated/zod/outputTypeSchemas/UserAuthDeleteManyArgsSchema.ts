import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthWhereInputSchema } from '../inputTypeSchemas/UserAuthWhereInputSchema'

export const UserAuthDeleteManyArgsSchema: z.ZodType<Prisma.UserAuthDeleteManyArgs> = z.object({
  where: UserAuthWhereInputSchema.optional(),
}).strict() ;

export default UserAuthDeleteManyArgsSchema;
