import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutTagsDocumentInputSchema } from './TagCreateWithoutTagsDocumentInputSchema';
import { TagUncheckedCreateWithoutTagsDocumentInputSchema } from './TagUncheckedCreateWithoutTagsDocumentInputSchema';
import { TagCreateOrConnectWithoutTagsDocumentInputSchema } from './TagCreateOrConnectWithoutTagsDocumentInputSchema';
import { TagUpsertWithoutTagsDocumentInputSchema } from './TagUpsertWithoutTagsDocumentInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutTagsDocumentInputSchema } from './TagUpdateToOneWithWhereWithoutTagsDocumentInputSchema';
import { TagUpdateWithoutTagsDocumentInputSchema } from './TagUpdateWithoutTagsDocumentInputSchema';
import { TagUncheckedUpdateWithoutTagsDocumentInputSchema } from './TagUncheckedUpdateWithoutTagsDocumentInputSchema';

export const TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutTagsDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedCreateWithoutTagsDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutTagsDocumentInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutTagsDocumentInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutTagsDocumentInputSchema),z.lazy(() => TagUpdateWithoutTagsDocumentInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTagsDocumentInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutTagsDocumentNestedInputSchema;
