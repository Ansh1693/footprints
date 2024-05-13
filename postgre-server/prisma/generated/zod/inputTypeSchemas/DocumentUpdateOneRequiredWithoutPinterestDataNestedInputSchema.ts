import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutPinterestDataInputSchema } from './DocumentCreateWithoutPinterestDataInputSchema';
import { DocumentUncheckedCreateWithoutPinterestDataInputSchema } from './DocumentUncheckedCreateWithoutPinterestDataInputSchema';
import { DocumentCreateOrConnectWithoutPinterestDataInputSchema } from './DocumentCreateOrConnectWithoutPinterestDataInputSchema';
import { DocumentUpsertWithoutPinterestDataInputSchema } from './DocumentUpsertWithoutPinterestDataInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutPinterestDataInputSchema } from './DocumentUpdateToOneWithWhereWithoutPinterestDataInputSchema';
import { DocumentUpdateWithoutPinterestDataInputSchema } from './DocumentUpdateWithoutPinterestDataInputSchema';
import { DocumentUncheckedUpdateWithoutPinterestDataInputSchema } from './DocumentUncheckedUpdateWithoutPinterestDataInputSchema';

export const DocumentUpdateOneRequiredWithoutPinterestDataNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutPinterestDataNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutPinterestDataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutPinterestDataInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutPinterestDataInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutPinterestDataInputSchema),z.lazy(() => DocumentUpdateWithoutPinterestDataInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutPinterestDataInputSchema) ]).optional(),
}).strict();

export default DocumentUpdateOneRequiredWithoutPinterestDataNestedInputSchema;
