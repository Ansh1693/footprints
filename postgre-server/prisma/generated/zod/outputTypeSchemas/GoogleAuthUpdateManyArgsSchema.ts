import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthUpdateManyMutationInputSchema } from '../inputTypeSchemas/GoogleAuthUpdateManyMutationInputSchema'
import { GoogleAuthUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GoogleAuthUncheckedUpdateManyInputSchema'
import { GoogleAuthWhereInputSchema } from '../inputTypeSchemas/GoogleAuthWhereInputSchema'

export const GoogleAuthUpdateManyArgsSchema: z.ZodType<Prisma.GoogleAuthUpdateManyArgs> = z.object({
  data: z.union([ GoogleAuthUpdateManyMutationInputSchema,GoogleAuthUncheckedUpdateManyInputSchema ]),
  where: GoogleAuthWhereInputSchema.optional(),
}).strict() ;

export default GoogleAuthUpdateManyArgsSchema;
