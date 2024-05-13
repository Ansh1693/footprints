import { z } from 'zod';

export const DocumentMetadataScalarFieldEnumSchema = z.enum(['id','documentId','documentType','bodyImageUrl','sourceUrl','createdAt','updatedAt']);

export default DocumentMetadataScalarFieldEnumSchema;
