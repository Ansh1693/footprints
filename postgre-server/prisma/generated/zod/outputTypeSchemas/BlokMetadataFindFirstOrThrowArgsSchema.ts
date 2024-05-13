import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataIncludeSchema } from '../inputTypeSchemas/BlokMetadataIncludeSchema'
import { BlokMetadataWhereInputSchema } from '../inputTypeSchemas/BlokMetadataWhereInputSchema'
import { BlokMetadataOrderByWithRelationInputSchema } from '../inputTypeSchemas/BlokMetadataOrderByWithRelationInputSchema'
import { BlokMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/BlokMetadataWhereUniqueInputSchema'
import { BlokMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/BlokMetadataScalarFieldEnumSchema'
import { BlokArgsSchema } from "../outputTypeSchemas/BlokArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlokMetadataSelectSchema: z.ZodType<Prisma.BlokMetadataSelect> = z.object({
  id: z.boolean().optional(),
  blokHeader: z.boolean().optional(),
  blokId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Blok: z.union([z.boolean(),z.lazy(() => BlokArgsSchema)]).optional(),
}).strict()

export const BlokMetadataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BlokMetadataFindFirstOrThrowArgs> = z.object({
  select: BlokMetadataSelectSchema.optional(),
  include: BlokMetadataIncludeSchema.optional(),
  where: BlokMetadataWhereInputSchema.optional(),
  orderBy: z.union([ BlokMetadataOrderByWithRelationInputSchema.array(),BlokMetadataOrderByWithRelationInputSchema ]).optional(),
  cursor: BlokMetadataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BlokMetadataScalarFieldEnumSchema,BlokMetadataScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BlokMetadataFindFirstOrThrowArgsSchema;
