import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateWithoutDocumentInputSchema } from './TagsDocumentCreateWithoutDocumentInputSchema';
import { TagsDocumentUncheckedCreateWithoutDocumentInputSchema } from './TagsDocumentUncheckedCreateWithoutDocumentInputSchema';
import { TagsDocumentCreateOrConnectWithoutDocumentInputSchema } from './TagsDocumentCreateOrConnectWithoutDocumentInputSchema';
import { TagsDocumentCreateManyDocumentInputEnvelopeSchema } from './TagsDocumentCreateManyDocumentInputEnvelopeSchema';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';

export const TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.TagsDocumentUncheckedCreateNestedManyWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentCreateWithoutDocumentInputSchema).array(),z.lazy(() => TagsDocumentUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsDocumentCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => TagsDocumentCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsDocumentCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagsDocumentUncheckedCreateNestedManyWithoutDocumentInputSchema;
