import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutTagsDocumentInputSchema } from './TagCreateWithoutTagsDocumentInputSchema';
import { TagUncheckedCreateWithoutTagsDocumentInputSchema } from './TagUncheckedCreateWithoutTagsDocumentInputSchema';

export const TagCreateOrConnectWithoutTagsDocumentInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutTagsDocumentInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedCreateWithoutTagsDocumentInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutTagsDocumentInputSchema;
