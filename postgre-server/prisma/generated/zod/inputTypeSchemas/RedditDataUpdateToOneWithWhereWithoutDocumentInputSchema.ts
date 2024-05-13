import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataWhereInputSchema } from './RedditDataWhereInputSchema';
import { RedditDataUpdateWithoutDocumentInputSchema } from './RedditDataUpdateWithoutDocumentInputSchema';
import { RedditDataUncheckedUpdateWithoutDocumentInputSchema } from './RedditDataUncheckedUpdateWithoutDocumentInputSchema';

export const RedditDataUpdateToOneWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.RedditDataUpdateToOneWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => RedditDataWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RedditDataUpdateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default RedditDataUpdateToOneWithWhereWithoutDocumentInputSchema;
