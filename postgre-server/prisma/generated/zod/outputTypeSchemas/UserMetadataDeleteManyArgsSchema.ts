import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataWhereInputSchema } from '../inputTypeSchemas/UserMetadataWhereInputSchema'

export const UserMetadataDeleteManyArgsSchema: z.ZodType<Prisma.UserMetadataDeleteManyArgs> = z.object({
  where: UserMetadataWhereInputSchema.optional(),
}).strict() ;

export default UserMetadataDeleteManyArgsSchema;
