import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentScalarWhereInputSchema } from './TagsDocumentScalarWhereInputSchema';
import { TagsDocumentUpdateManyMutationInputSchema } from './TagsDocumentUpdateManyMutationInputSchema';
import { TagsDocumentUncheckedUpdateManyWithoutTagInputSchema } from './TagsDocumentUncheckedUpdateManyWithoutTagInputSchema';

export const TagsDocumentUpdateManyWithWhereWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentUpdateManyWithWhereWithoutTagInput> = z.object({
  where: z.lazy(() => TagsDocumentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsDocumentUpdateManyMutationInputSchema),z.lazy(() => TagsDocumentUncheckedUpdateManyWithoutTagInputSchema) ]),
}).strict();

export default TagsDocumentUpdateManyWithWhereWithoutTagInputSchema;
