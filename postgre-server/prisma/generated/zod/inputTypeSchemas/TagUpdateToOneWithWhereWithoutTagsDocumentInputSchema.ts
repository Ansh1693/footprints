import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TagUpdateWithoutTagsDocumentInputSchema } from './TagUpdateWithoutTagsDocumentInputSchema';
import { TagUncheckedUpdateWithoutTagsDocumentInputSchema } from './TagUncheckedUpdateWithoutTagsDocumentInputSchema';

export const TagUpdateToOneWithWhereWithoutTagsDocumentInputSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutTagsDocumentInput> = z.object({
  where: z.lazy(() => TagWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TagUpdateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTagsDocumentInputSchema) ]),
}).strict();

export default TagUpdateToOneWithWhereWithoutTagsDocumentInputSchema;
