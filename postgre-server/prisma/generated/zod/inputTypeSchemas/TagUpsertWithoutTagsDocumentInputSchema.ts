import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagUpdateWithoutTagsDocumentInputSchema } from './TagUpdateWithoutTagsDocumentInputSchema';
import { TagUncheckedUpdateWithoutTagsDocumentInputSchema } from './TagUncheckedUpdateWithoutTagsDocumentInputSchema';
import { TagCreateWithoutTagsDocumentInputSchema } from './TagCreateWithoutTagsDocumentInputSchema';
import { TagUncheckedCreateWithoutTagsDocumentInputSchema } from './TagUncheckedCreateWithoutTagsDocumentInputSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';

export const TagUpsertWithoutTagsDocumentInputSchema: z.ZodType<Prisma.TagUpsertWithoutTagsDocumentInput> = z.object({
  update: z.union([ z.lazy(() => TagUpdateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTagsDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedCreateWithoutTagsDocumentInputSchema) ]),
  where: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export default TagUpsertWithoutTagsDocumentInputSchema;
