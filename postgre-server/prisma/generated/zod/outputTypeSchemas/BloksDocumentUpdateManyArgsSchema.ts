import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloksDocumentUpdateManyMutationInputSchema } from '../inputTypeSchemas/BloksDocumentUpdateManyMutationInputSchema'
import { BloksDocumentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BloksDocumentUncheckedUpdateManyInputSchema'
import { BloksDocumentWhereInputSchema } from '../inputTypeSchemas/BloksDocumentWhereInputSchema'

export const BloksDocumentUpdateManyArgsSchema: z.ZodType<Prisma.BloksDocumentUpdateManyArgs> = z.object({
  data: z.union([ BloksDocumentUpdateManyMutationInputSchema,BloksDocumentUncheckedUpdateManyInputSchema ]),
  where: BloksDocumentWhereInputSchema.optional(),
}).strict() ;

export default BloksDocumentUpdateManyArgsSchema;
