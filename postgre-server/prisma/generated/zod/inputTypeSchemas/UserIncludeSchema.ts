import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserMetadataArgsSchema } from "../outputTypeSchemas/UserMetadataArgsSchema"
import { UserAuthArgsSchema } from "../outputTypeSchemas/UserAuthArgsSchema"
import { DocumentFindManyArgsSchema } from "../outputTypeSchemas/DocumentFindManyArgsSchema"
import { CommentsFindManyArgsSchema } from "../outputTypeSchemas/CommentsFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { BlokFindManyArgsSchema } from "../outputTypeSchemas/BlokFindManyArgsSchema"
import { BlokFollowersFindManyArgsSchema } from "../outputTypeSchemas/BlokFollowersFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  UserMetadata: z.union([z.boolean(),z.lazy(() => UserMetadataArgsSchema)]).optional(),
  UserAuth: z.union([z.boolean(),z.lazy(() => UserAuthArgsSchema)]).optional(),
  Document: z.union([z.boolean(),z.lazy(() => DocumentFindManyArgsSchema)]).optional(),
  Comments: z.union([z.boolean(),z.lazy(() => CommentsFindManyArgsSchema)]).optional(),
  Tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  Blok: z.union([z.boolean(),z.lazy(() => BlokFindManyArgsSchema)]).optional(),
  BlokFollowers: z.union([z.boolean(),z.lazy(() => BlokFollowersFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
