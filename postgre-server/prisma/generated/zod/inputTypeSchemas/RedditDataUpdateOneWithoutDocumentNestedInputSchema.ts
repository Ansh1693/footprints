import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RedditDataCreateWithoutDocumentInputSchema } from './RedditDataCreateWithoutDocumentInputSchema';
import { RedditDataUncheckedCreateWithoutDocumentInputSchema } from './RedditDataUncheckedCreateWithoutDocumentInputSchema';
import { RedditDataCreateOrConnectWithoutDocumentInputSchema } from './RedditDataCreateOrConnectWithoutDocumentInputSchema';
import { RedditDataUpsertWithoutDocumentInputSchema } from './RedditDataUpsertWithoutDocumentInputSchema';
import { RedditDataWhereInputSchema } from './RedditDataWhereInputSchema';
import { RedditDataWhereUniqueInputSchema } from './RedditDataWhereUniqueInputSchema';
import { RedditDataUpdateToOneWithWhereWithoutDocumentInputSchema } from './RedditDataUpdateToOneWithWhereWithoutDocumentInputSchema';
import { RedditDataUpdateWithoutDocumentInputSchema } from './RedditDataUpdateWithoutDocumentInputSchema';
import { RedditDataUncheckedUpdateWithoutDocumentInputSchema } from './RedditDataUncheckedUpdateWithoutDocumentInputSchema';

export const RedditDataUpdateOneWithoutDocumentNestedInputSchema: z.ZodType<Prisma.RedditDataUpdateOneWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => RedditDataCreateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RedditDataCreateOrConnectWithoutDocumentInputSchema).optional(),
  upsert: z.lazy(() => RedditDataUpsertWithoutDocumentInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RedditDataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RedditDataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RedditDataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RedditDataUpdateToOneWithWhereWithoutDocumentInputSchema),z.lazy(() => RedditDataUpdateWithoutDocumentInputSchema),z.lazy(() => RedditDataUncheckedUpdateWithoutDocumentInputSchema) ]).optional(),
}).strict();

export default RedditDataUpdateOneWithoutDocumentNestedInputSchema;
