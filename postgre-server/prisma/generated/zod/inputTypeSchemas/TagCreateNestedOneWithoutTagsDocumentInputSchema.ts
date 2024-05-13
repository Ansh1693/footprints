import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutTagsDocumentInputSchema } from './TagCreateWithoutTagsDocumentInputSchema';
import { TagUncheckedCreateWithoutTagsDocumentInputSchema } from './TagUncheckedCreateWithoutTagsDocumentInputSchema';
import { TagCreateOrConnectWithoutTagsDocumentInputSchema } from './TagCreateOrConnectWithoutTagsDocumentInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutTagsDocumentInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutTagsDocumentInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedCreateWithoutTagsDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutTagsDocumentInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutTagsDocumentInputSchema;
