import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthWhereInputSchema } from '../inputTypeSchemas/GoogleAuthWhereInputSchema'
import { GoogleAuthOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GoogleAuthOrderByWithAggregationInputSchema'
import { GoogleAuthScalarFieldEnumSchema } from '../inputTypeSchemas/GoogleAuthScalarFieldEnumSchema'
import { GoogleAuthScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GoogleAuthScalarWhereWithAggregatesInputSchema'

export const GoogleAuthGroupByArgsSchema: z.ZodType<Prisma.GoogleAuthGroupByArgs> = z.object({
  where: GoogleAuthWhereInputSchema.optional(),
  orderBy: z.union([ GoogleAuthOrderByWithAggregationInputSchema.array(),GoogleAuthOrderByWithAggregationInputSchema ]).optional(),
  by: GoogleAuthScalarFieldEnumSchema.array(),
  having: GoogleAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GoogleAuthGroupByArgsSchema;
