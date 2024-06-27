import { z } from 'zod';

export const DocumentMetadataScalarFieldEnumSchema = z.enum(['id','documentId','documentType','url','createdAt','updatedAt']);

export default DocumentMetadataScalarFieldEnumSchema;
