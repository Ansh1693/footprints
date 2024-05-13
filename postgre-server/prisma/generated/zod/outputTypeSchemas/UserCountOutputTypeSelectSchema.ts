import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  Document: z.boolean().optional(),
  Comments: z.boolean().optional(),
  Tags: z.boolean().optional(),
  Blok: z.boolean().optional(),
  BlokFollowers: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
