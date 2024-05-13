import { z } from 'zod';

export const BlokMetadataScalarFieldEnumSchema = z.enum(['id','blokHeader','blokId','createdAt','updatedAt']);

export default BlokMetadataScalarFieldEnumSchema;
