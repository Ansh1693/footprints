import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserAuthUpdateManyMutationInputSchema'
import { UserAuthUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserAuthUncheckedUpdateManyInputSchema'
import { UserAuthWhereInputSchema } from '../inputTypeSchemas/UserAuthWhereInputSchema'

export const UserAuthUpdateManyArgsSchema: z.ZodType<Prisma.UserAuthUpdateManyArgs> = z.object({
  data: z.union([ UserAuthUpdateManyMutationInputSchema,UserAuthUncheckedUpdateManyInputSchema ]),
  where: UserAuthWhereInputSchema.optional(),
}).strict() ;

export default UserAuthUpdateManyArgsSchema;
