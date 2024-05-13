import { z } from 'zod';

export const PinterestDataScalarFieldEnumSchema = z.enum(['id','username','postId','documentId']);

export default PinterestDataScalarFieldEnumSchema;
