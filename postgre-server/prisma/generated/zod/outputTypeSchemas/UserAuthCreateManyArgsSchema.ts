import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAuthCreateManyInputSchema } from '../inputTypeSchemas/UserAuthCreateManyInputSchema'

export const UserAuthCreateManyArgsSchema: z.ZodType<Prisma.UserAuthCreateManyArgs> = z.object({
  data: z.union([ UserAuthCreateManyInputSchema,UserAuthCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UserAuthCreateManyArgsSchema;
