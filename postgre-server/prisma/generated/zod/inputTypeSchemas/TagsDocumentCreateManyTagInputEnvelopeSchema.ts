import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagsDocumentCreateManyTagInputSchema } from './TagsDocumentCreateManyTagInputSchema';

export const TagsDocumentCreateManyTagInputEnvelopeSchema: z.ZodType<Prisma.TagsDocumentCreateManyTagInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TagsDocumentCreateManyTagInputSchema),z.lazy(() => TagsDocumentCreateManyTagInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default TagsDocumentCreateManyTagInputEnvelopeSchema;
