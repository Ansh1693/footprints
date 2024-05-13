import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentUpdateWithoutTagInputSchema } from './TagsDocumentUpdateWithoutTagInputSchema';
import { TagsDocumentUncheckedUpdateWithoutTagInputSchema } from './TagsDocumentUncheckedUpdateWithoutTagInputSchema';

export const TagsDocumentUpdateWithWhereUniqueWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentUpdateWithWhereUniqueWithoutTagInput> = z.object({
  where: z.lazy(() => TagsDocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsDocumentUpdateWithoutTagInputSchema),z.lazy(() => TagsDocumentUncheckedUpdateWithoutTagInputSchema) ]),
}).strict();

export default TagsDocumentUpdateWithWhereUniqueWithoutTagInputSchema;
