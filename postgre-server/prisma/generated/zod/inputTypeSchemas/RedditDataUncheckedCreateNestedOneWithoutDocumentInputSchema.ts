import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataCreateWithoutDocumentInputSchema } from './RedditDataCreateWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateWithoutDocumentInputSchema } from './RedditDataUncheckedCreateWithoutDocumentInputSchema';
import { RedditDataCreateOrConnectWithoutDocumentInputSchema } from './RedditDataCreateOrConnectWithoutDocumentInputSchema';
import { RedditDataWhereUniqueInputSchema } from './RedditDataWhereUniqueInputSchema';

export const RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataUncheckedCreateNestedOneWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => RedditDataCreateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RedditDataCreateOrConnectWithoutDocumentInputSchema).optional(),
  connect: z.lazy(() => RedditDataWhereUniqueInputSchema).optional()
}).strict();

export default RedditDataUncheckedCreateNestedOneWithoutDocumentInputSchema;
