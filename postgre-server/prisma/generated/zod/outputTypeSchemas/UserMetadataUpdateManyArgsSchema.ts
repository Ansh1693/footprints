import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserMetadataUpdateManyMutationInputSchema'
import { UserMetadataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserMetadataUncheckedUpdateManyInputSchema'
import { UserMetadataWhereInputSchema } from '../inputTypeSchemas/UserMetadataWhereInputSchema'

export const UserMetadataUpdateManyArgsSchema: z.ZodType<Prisma.UserMetadataUpdateManyArgs> = z.object({
  data: z.union([ UserMetadataUpdateManyMutationInputSchema,UserMetadataUncheckedUpdateManyInputSchema ]),
  where: UserMetadataWhereInputSchema.optional(),
}).strict() ;

export default UserMetadataUpdateManyArgsSchema;
