import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentScalarWhereInputSchema } from './TagsDocumentScalarWhereInputSchema';
import { TagsDocumentUpdateManyMutationInputSchema } from './TagsDocumentUpdateManyMutationInputSchema';
import { TagsDocumentUncheckedUpdateManyWithoutDocumentInputSchema } from './TagsDocumentUncheckedUpdateManyWithoutDocumentInputSchema';

export const TagsDocumentUpdateManyWithWhereWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentUpdateManyWithWhereWithoutDocumentInput> = z.object({
  where: z.lazy(() => TagsDocumentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagsDocumentUpdateManyMutationInputSchema),z.lazy(() => TagsDocumentUncheckedUpdateManyWithoutDocumentInputSchema) ]),
}).strict();

export default TagsDocumentUpdateManyWithWhereWithoutDocumentInputSchema;
