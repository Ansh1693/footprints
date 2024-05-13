import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithoutUserInputSchema } from './DocumentUpdateWithoutUserInputSchema';
import { DocumentUncheckedUpdateWithoutUserInputSchema } from './DocumentUncheckedUpdateWithoutUserInputSchema';
import { DocumentCreateWithoutUserInputSchema } from './DocumentCreateWithoutUserInputSchema';
import { DocumentUncheckedCreateWithoutUserInputSchema } from './DocumentUncheckedCreateWithoutUserInputSchema';

export const DocumentUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DocumentUpdateWithoutUserInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutUserInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default DocumentUpsertWithWhereUniqueWithoutUserInputSchema;
