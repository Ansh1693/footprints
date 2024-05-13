import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthWhereInputSchema } from '../inputTypeSchemas/GoogleAuthWhereInputSchema'
import { GoogleAuthOrderByWithRelationInputSchema } from '../inputTypeSchemas/GoogleAuthOrderByWithRelationInputSchema'
import { GoogleAuthWhereUniqueInputSchema } from '../inputTypeSchemas/GoogleAuthWhereUniqueInputSchema'

export const GoogleAuthAggregateArgsSchema: z.ZodType<Prisma.GoogleAuthAggregateArgs> = z.object({
  where: GoogleAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleAuthOrderByWithRelationInputSchema.array(),GoogleAuthOrderByWithRelationInputSchema ]).optional(),
  cursor: GoogleAuthWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GoogleAuthAggregateArgsSchema;
