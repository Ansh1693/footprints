import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id','tagName','userId','createdAt','updatedAt']);

export default TagScalarFieldEnumSchema;
