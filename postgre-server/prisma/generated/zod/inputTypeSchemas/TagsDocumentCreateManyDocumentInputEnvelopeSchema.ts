import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateManyDocumentInputSchema } from './TagsDocumentCreateManyDocumentInputSchema';

export const TagsDocumentCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.TagsDocumentCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsDocumentCreateManyDocumentInputSchema),z.lazy(() => TagsDocumentCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsDocumentCreateManyDocumentInputEnvelopeSchema;
