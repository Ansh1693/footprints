import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BlokFollowersBlokIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.BlokFollowersBlokIdUserIdCompoundUniqueInput> = z.object({
  blokId: z.string(),
  userId: z.string()
}).strict();

export default BlokFollowersBlokIdUserIdCompoundUniqueInputSchema;
