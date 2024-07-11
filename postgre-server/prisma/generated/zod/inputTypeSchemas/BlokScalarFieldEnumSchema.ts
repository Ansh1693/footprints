import { z } from 'zod';

export const BlokScalarFieldEnumSchema = z.enum(['id','userId','profileId','blokName','description','public','deleted','createdAt','updatedAt']);

export default BlokScalarFieldEnumSchema;
