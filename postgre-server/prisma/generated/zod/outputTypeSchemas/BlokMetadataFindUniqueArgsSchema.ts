import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataIncludeSchema } from '../inputTypeSchemas/BlokMetadataIncludeSchema'
import { BlokMetadataWhereUniqueInputSchema } from '../inputTypeSchemas/BlokMetadataWhereUniqueInputSchema'
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

export const BlokMetadataFindUniqueArgsSchema: z.ZodType<Prisma.BlokMetadataFindUniqueArgs> = z.object({
  select: BlokMetadataSelectSchema.optional(),
  include: BlokMetadataIncludeSchema.optional(),
  where: BlokMetadataWhereUniqueInputSchema,
}).strict() ;

export default BlokMetadataFindUniqueArgsSchema;
