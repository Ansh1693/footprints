import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentUpdateManyMutationInputSchema'
import { DocumentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentUncheckedUpdateManyInputSchema'
import { DocumentWhereInputSchema } from '../inputTypeSchemas/DocumentWhereInputSchema'

export const DocumentUpdateManyArgsSchema: z.ZodType<Prisma.DocumentUpdateManyArgs> = z.object({
  data: z.union([ DocumentUpdateManyMutationInputSchema,DocumentUncheckedUpdateManyInputSchema ]),
  where: DocumentWhereInputSchema.optional(),
}).strict() ;

export default DocumentUpdateManyArgsSchema;
