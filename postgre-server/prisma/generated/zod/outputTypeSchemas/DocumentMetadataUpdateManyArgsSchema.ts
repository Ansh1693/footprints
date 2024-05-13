import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentMetadataUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentMetadataUpdateManyMutationInputSchema'
import { DocumentMetadataUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentMetadataUncheckedUpdateManyInputSchema'
import { DocumentMetadataWhereInputSchema } from '../inputTypeSchemas/DocumentMetadataWhereInputSchema'

export const DocumentMetadataUpdateManyArgsSchema: z.ZodType<Prisma.DocumentMetadataUpdateManyArgs> = z.object({
  data: z.union([ DocumentMetadataUpdateManyMutationInputSchema,DocumentMetadataUncheckedUpdateManyInputSchema ]),
  where: DocumentMetadataWhereInputSchema.optional(),
}).strict() ;

export default DocumentMetadataUpdateManyArgsSchema;
