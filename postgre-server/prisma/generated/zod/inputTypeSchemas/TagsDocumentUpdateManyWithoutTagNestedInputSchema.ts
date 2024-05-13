import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateWithoutTagInputSchema } from './TagsDocumentCreateWithoutTagInputSchema';
import { TagsDocumentUncheckedCreateWithoutTagInputSchema } from './TagsDocumentUncheckedCreateWithoutTagInputSchema';
import { TagsDocumentCreateOrConnectWithoutTagInputSchema } from './TagsDocumentCreateOrConnectWithoutTagInputSchema';
import { TagsDocumentUpsertWithWhereUniqueWithoutTagInputSchema } from './TagsDocumentUpsertWithWhereUniqueWithoutTagInputSchema';
import { TagsDocumentCreateManyTagInputEnvelopeSchema } from './TagsDocumentCreateManyTagInputEnvelopeSchema';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentUpdateWithWhereUniqueWithoutTagInputSchema } from './TagsDocumentUpdateWithWhereUniqueWithoutTagInputSchema';
import { TagsDocumentUpdateManyWithWhereWithoutTagInputSchema } from './TagsDocumentUpdateManyWithWhereWithoutTagInputSchema';
import { TagsDocumentScalarWhereInputSchema } from './TagsDocumentScalarWhereInputSchema';

export const TagsDocumentUpdateManyWithoutTagNestedInputSchema: z.ZodType<Prisma.TagsDocumentUpdateManyWithoutTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutTagInputSchema),z.lazy(() => TagsDocumentCreateWithoutTagInputSchema).array(),z.lazy(() => TagsDocumentUncheckedCreateWithoutTagInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsDocumentCreateOrConnectWithoutTagInputSchema),z.lazy(() => TagsDocumentCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsDocumentUpsertWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsDocumentUpsertWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsDocumentCreateManyTagInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsDocumentUpdateWithWhereUniqueWithoutTagInputSchema),z.lazy(() => TagsDocumentUpdateWithWhereUniqueWithoutTagInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsDocumentUpdateManyWithWhereWithoutTagInputSchema),z.lazy(() => TagsDocumentUpdateManyWithWhereWithoutTagInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsDocumentScalarWhereInputSchema),z.lazy(() => TagsDocumentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsDocumentUpdateManyWithoutTagNestedInputSchema;
