import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PinterestDataCreateWithoutDocumentInputSchema } from './PinterestDataCreateWithoutDocumentInputSchema';
import { PinterestDataUncheckedCreateWithoutDocumentInputSchema } from './PinterestDataUncheckedCreateWithoutDocumentInputSchema';
import { PinterestDataCreateOrConnectWithoutDocumentInputSchema } from './PinterestDataCreateOrConnectWithoutDocumentInputSchema';
import { PinterestDataUpsertWithoutDocumentInputSchema } from './PinterestDataUpsertWithoutDocumentInputSchema';
import { PinterestDataWhereInputSchema } from './PinterestDataWhereInputSchema';
import { PinterestDataWhereUniqueInputSchema } from './PinterestDataWhereUniqueInputSchema';
import { PinterestDataUpdateToOneWithWhereWithoutDocumentInputSchema } from './PinterestDataUpdateToOneWithWhereWithoutDocumentInputSchema';
import { PinterestDataUpdateWithoutDocumentInputSchema } from './PinterestDataUpdateWithoutDocumentInputSchema';
import { PinterestDataUncheckedUpdateWithoutDocumentInputSchema } from './PinterestDataUncheckedUpdateWithoutDocumentInputSchema';

export const PinterestDataUpdateOneWithoutDocumentNestedInputSchema: z.ZodType<Prisma.PinterestDataUpdateOneWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PinterestDataCreateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedCreateWithoutDocumentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PinterestDataCreateOrConnectWithoutDocumentInputSchema).optional(),
  upsert: z.lazy(() => PinterestDataUpsertWithoutDocumentInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PinterestDataWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PinterestDataWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PinterestDataWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PinterestDataUpdateToOneWithWhereWithoutDocumentInputSchema),z.lazy(() => PinterestDataUpdateWithoutDocumentInputSchema),z.lazy(() => PinterestDataUncheckedUpdateWithoutDocumentInputSchema) ]).optional(),
}).strict();

export default PinterestDataUpdateOneWithoutDocumentNestedInputSchema;
