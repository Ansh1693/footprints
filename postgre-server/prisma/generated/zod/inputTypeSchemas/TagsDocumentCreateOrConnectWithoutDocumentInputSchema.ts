import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentCreateWithoutDocumentInputSchema } from './TagsDocumentCreateWithoutDocumentInputSchema';
import { TagsDocumentUncheckedCreateWithoutDocumentInputSchema } from './TagsDocumentUncheckedCreateWithoutDocumentInputSchema';

export const TagsDocumentCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => TagsDocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default TagsDocumentCreateOrConnectWithoutDocumentInputSchema;
