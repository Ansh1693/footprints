import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentCreateWithoutTagInputSchema } from './TagsDocumentCreateWithoutTagInputSchema';
import { TagsDocumentUncheckedCreateWithoutTagInputSchema } from './TagsDocumentUncheckedCreateWithoutTagInputSchema';

export const TagsDocumentCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => TagsDocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutTagInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default TagsDocumentCreateOrConnectWithoutTagInputSchema;
