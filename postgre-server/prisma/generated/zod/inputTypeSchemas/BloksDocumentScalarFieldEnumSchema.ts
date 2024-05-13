import { z } from 'zod';

export const BloksDocumentScalarFieldEnumSchema = z.enum(['blokId','documentId','createdAt','updatedAt']);

export default BloksDocumentScalarFieldEnumSchema;
