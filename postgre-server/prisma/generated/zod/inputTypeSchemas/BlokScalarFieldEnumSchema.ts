import { z } from 'zod';

export const BlokScalarFieldEnumSchema = z.enum(['id','userId','blokName','description','status','createdAt','updatedAt']);

export default BlokScalarFieldEnumSchema;
