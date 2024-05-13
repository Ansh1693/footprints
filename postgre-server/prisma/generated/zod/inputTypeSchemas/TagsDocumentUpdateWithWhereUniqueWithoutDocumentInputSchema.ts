import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentUpdateWithoutDocumentInputSchema } from './TagsDocumentUpdateWithoutDocumentInputSchema';
import { TagsDocumentUncheckedUpdateWithoutDocumentInputSchema } from './TagsDocumentUncheckedUpdateWithoutDocumentInputSchema';

export const TagsDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentUpdateWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => TagsDocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagsDocumentUpdateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default TagsDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema;
