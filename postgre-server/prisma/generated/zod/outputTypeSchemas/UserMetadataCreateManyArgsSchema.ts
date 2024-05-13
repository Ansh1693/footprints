import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataCreateManyInputSchema } from '../inputTypeSchemas/UserMetadataCreateManyInputSchema'

export const UserMetadataCreateManyArgsSchema: z.ZodType<Prisma.UserMetadataCreateManyArgs> = z.object({
  data: z.union([ UserMetadataCreateManyInputSchema,UserMetadataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UserMetadataCreateManyArgsSchema;
