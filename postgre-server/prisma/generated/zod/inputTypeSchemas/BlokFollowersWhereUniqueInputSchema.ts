import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlokFollowersBlokIdUserIdCompoundUniqueInputSchema } from './BlokFollowersBlokIdUserIdCompoundUniqueInputSchema';
import { BlokFollowersWhereInputSchema } from './BlokFollowersWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BlokRelationFilterSchema } from './BlokRelationFilterSchema';
import { BlokWhereInputSchema } from './BlokWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const BlokFollowersWhereUniqueInputSchema: z.ZodType<Prisma.BlokFollowersWhereUniqueInput> = z.object({
  blokId_userId: z.lazy(() => BlokFollowersBlokIdUserIdCompoundUniqueInputSchema)
})
.and(z.object({
  blokId_userId: z.lazy(() => BlokFollowersBlokIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => BlokFollowersWhereInputSchema),z.lazy(() => BlokFollowersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlokFollowersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlokFollowersWhereInputSchema),z.lazy(() => BlokFollowersWhereInputSchema).array() ]).optional(),
  blokId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Blok: z.union([ z.lazy(() => BlokRelationFilterSchema),z.lazy(() => BlokWhereInputSchema) ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default BlokFollowersWhereUniqueInputSchema;
