import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataWhereUniqueInputSchema } from './RedditDataWhereUniqueInputSchema';
import { RedditDataCreateWithoutDocumentInputSchema } from './RedditDataCreateWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateWithoutDocumentInputSchema } from './RedditDataUncheckedCreateWithoutDocumentInputSchema';

export const RedditDataCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => RedditDataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RedditDataCreateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default RedditDataCreateOrConnectWithoutDocumentInputSchema;
