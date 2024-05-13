import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateWithoutDocumentInputSchema } from './TagsDocumentCreateWithoutDocumentInputSchema';
import { TagsDocumentUncheckedCreateWithoutDocumentInputSchema } from './TagsDocumentUncheckedCreateWithoutDocumentInputSchema';
import { TagsDocumentCreateOrConnectWithoutDocumentInputSchema } from './TagsDocumentCreateOrConnectWithoutDocumentInputSchema';
import { TagsDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema } from './TagsDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { TagsDocumentCreateManyDocumentInputEnvelopeSchema } from './TagsDocumentCreateManyDocumentInputEnvelopeSchema';
import { TagsDocumentWhereUniqueInputSchema } from './TagsDocumentWhereUniqueInputSchema';
import { TagsDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema } from './TagsDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { TagsDocumentUpdateManyWithWhereWithoutDocumentInputSchema } from './TagsDocumentUpdateManyWithWhereWithoutDocumentInputSchema';
import { TagsDocumentScalarWhereInputSchema } from './TagsDocumentScalarWhereInputSchema';

export const TagsDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.TagsDocumentUncheckedUpdateManyWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagsDocumentCreateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentCreateWithoutDocumentInputSchema).array(),z.lazy(() => TagsDocumentUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagsDocumentCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => TagsDocumentCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagsDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagsDocumentCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagsDocumentWhereUniqueInputSchema),z.lazy(() => TagsDocumentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagsDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagsDocumentUpdateManyWithWhereWithoutDocumentInputSchema),z.lazy(() => TagsDocumentUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagsDocumentScalarWhereInputSchema),z.lazy(() => TagsDocumentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagsDocumentUncheckedUpdateManyWithoutDocumentNestedInputSchema;
