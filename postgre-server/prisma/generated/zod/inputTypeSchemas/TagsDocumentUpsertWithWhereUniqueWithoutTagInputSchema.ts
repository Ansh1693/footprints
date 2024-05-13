import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentUpdateWithoutTagInputSchema } from './TagsDocumentUpdateWithoutTagInputSchema';
import { TagsDocumentUncheckedUpdateWithoutTagInputSchema } from './TagsDocumentUncheckedUpdateWithoutTagInputSchema';
import { TagsDocumentCreateWithoutTagInputSchema } from './TagsDocumentCreateWithoutTagInputSchema';
import { TagsDocumentUncheckedCreateWithoutTagInputSchema } from './TagsDocumentUncheckedCreateWithoutTagInputSchema';

export const TagsDocumentUpsertWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentUpsertWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsDocumentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsDocumentUpdateWithoutTagInputSchema),z.lazy(() => TagsDocumentUncheckedUpdateWithoutTagInputSchema) ]),
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutTagInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default TagsDocumentUpsertWithWhereUniqueWithoutTagInputSchema;
