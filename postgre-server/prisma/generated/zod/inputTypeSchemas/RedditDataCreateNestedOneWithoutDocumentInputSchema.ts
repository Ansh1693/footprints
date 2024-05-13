import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataCreateWithoutDocumentInputSchema } from './RedditDataCreateWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateWithoutDocumentInputSchema } from './RedditDataUncheckedCreateWithoutDocumentInputSchema';
import { RedditDataCreateOrConnectWithoutDocumentInputSchema } from './RedditDataCreateOrConnectWithoutDocumentInputSchema';
import { RedditDataWhereUniqueInputSchema } from './RedditDataWhereUniqueInputSchema';

export const RedditDataCreateNestedOneWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataCreateNestedOneWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => RedditDataCreateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RedditDataCreateOrConnectWithoutDocumentInputSchema).optional(),
  connect: z.lazy(() => RedditDataWhereUniqueInputSchema).optional()
}).strict();

export default RedditDataCreateNestedOneWithoutDocumentInputSchema;
