import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BlokIncludeSchema } from '../inputTypeSchemas/BlokIncludeSchema'
import { BlokCreateInputSchema } from '../inputTypeSchemas/BlokCreateInputSchema'
import { BlokUncheckedCreateInputSchema } from '../inputTypeSchemas/BlokUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { BloksDocumentFindManyArgsSchema } from "../outputTypeSchemas/BloksDocumentFindManyArgsSchema"
import { BlokMetadataArgsSchema } from "../outputTypeSchemas/BlokMetadataArgsSchema"
import { BlokFollowersFindManyArgsSchema } from "../outputTypeSchemas/BlokFollowersFindManyArgsSchema"
import { BlokCountOutputTypeArgsSchema } from "../outputTypeSchemas/BlokCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BlokSelectSchema: z.ZodType<Prisma.BlokSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  blokName: z.boolean().optional(),
  description: z.boolean().optional(),
  public: z.boolean().optional(),
  deleted: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  BloksDocument: z.union([z.boolean(),z.lazy(() => BloksDocumentFindManyArgsSchema)]).optional(),
  BlokMetadata: z.union([z.boolean(),z.lazy(() => BlokMetadataArgsSchema)]).optional(),
  BlokFollowers: z.union([z.boolean(),z.lazy(() => BlokFollowersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BlokCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BlokCreateArgsSchema: z.ZodType<Prisma.BlokCreateArgs> = z.object({
  select: BlokSelectSchema.optional(),
  include: BlokIncludeSchema.optional(),
  data: z.union([ BlokCreateInputSchema,BlokUncheckedCreateInputSchema ]),
}).strict() ;

export default BlokCreateArgsSchema;
