import { z } from 'zod';

export const StatusSchema = z.enum(['Verified','Public','Deleted','Pinned','Comments']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
