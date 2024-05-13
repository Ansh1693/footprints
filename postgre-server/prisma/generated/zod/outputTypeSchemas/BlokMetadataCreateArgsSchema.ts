import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokMetadataIncludeSchema } from '../inputTypeSchemas/BlokMetadataIncludeSchema'
import { BlokMetadataCreateInputSchema } from '../inputTypeSchemas/BlokMetadataCreateInputSchema'
import { BlokMetadataUncheckedCreateInputSchema } from '../inputTypeSchemas/BlokMetadataUncheckedCreateInputSchema'
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

export const BlokMetadataCreateArgsSchema: z.ZodType<Prisma.BlokMetadataCreateArgs> = z.object({
  select: BlokMetadataSelectSchema.optional(),
  include: BlokMetadataIncludeSchema.optional(),
  data: z.union([ BlokMetadataCreateInputSchema,BlokMetadataUncheckedCreateInputSchema ]),
}).strict() ;

export default BlokMetadataCreateArgsSchema;
