import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GoogleAuthSelectSchema } from '../inputTypeSchemas/GoogleAuthSelectSchema';
import { GoogleAuthIncludeSchema } from '../inputTypeSchemas/GoogleAuthIncludeSchema';

export const GoogleAuthArgsSchema: z.ZodType<Prisma.GoogleAuthDefaultArgs> = z.object({
  select: z.lazy(() => GoogleAuthSelectSchema).optional(),
  include: z.lazy(() => GoogleAuthIncludeSchema).optional(),
}).strict();

export default GoogleAuthArgsSchema;
