import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataUpdateWithoutDocumentInputSchema } from './RedditDataUpdateWithoutDocumentInputSchema';
import { RedditDataUncheckedUpdateWithoutDocumentInputSchema } from './RedditDataUncheckedUpdateWithoutDocumentInputSchema';
import { RedditDataCreateWithoutDocumentInputSchema } from './RedditDataCreateWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateWithoutDocumentInputSchema } from './RedditDataUncheckedCreateWithoutDocumentInputSchema';
import { RedditDataWhereInputSchema } from './RedditDataWhereInputSchema';

export const RedditDataUpsertWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataUpsertWithoutDocumentInput> = z.object({
  update: z.union([ z.lazy(() => RedditDataUpdateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => RedditDataCreateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedCreateWithoutDocumentInputSchema) ]),
  where: z.lazy(() => RedditDataWhereInputSchema).optional()
}).strict();

export default RedditDataUpsertWithoutDocumentInputSchema;
