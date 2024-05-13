import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentUpdateWithoutDocumentInputSchema } from './TagsDocumentUpdateWithoutDocumentInputSchema';
import { TagsDocumentUncheckedUpdateWithoutDocumentInputSchema } from './TagsDocumentUncheckedUpdateWithoutDocumentInputSchema';
import { TagsDocumentCreateWithoutDocumentInputSchema } from './TagsDocumentCreateWithoutDocumentInputSchema';
import { TagsDocumentUncheckedCreateWithoutDocumentInputSchema } from './TagsDocumentUncheckedCreateWithoutDocumentInputSchema';

export const TagsDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentUpsertWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => TagsDocumentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagsDocumentUpdateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default TagsDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema;
