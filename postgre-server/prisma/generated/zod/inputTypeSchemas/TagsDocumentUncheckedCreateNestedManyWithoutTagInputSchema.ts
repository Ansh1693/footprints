import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateWithoutTagInputSchema } from './TagsDocumentCreateWithoutTagInputSchema';
import { TagsDocumentUncheckedCreateWithoutTagInputSchema } from './TagsDocumentUncheckedCreateWithoutTagInputSchema';
import { TagsDocumentCreateOrConnectWithoutTagInputSchema } from './TagsDocumentCreateOrConnectWithoutTagInputSchema';
import { TagsDocumentCreateManyTagInputEnvelopeSchema } from './TagsDocumentCreateManyTagInputEnvelopeSchema';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';

export const TagsDocumentUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.TagsDocumentUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutTagInputSchema),z.lazy(() => TagsDocumentCreateWithoutTagInputSchema).array(),z.lazy(() => TagsDocumentUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsDocumentCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsDocumentCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsDocumentCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsDocumentUncheckedCreateNestedManyWithoutTagInputSchema;
