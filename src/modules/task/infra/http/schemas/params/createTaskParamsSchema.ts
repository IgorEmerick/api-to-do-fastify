import { Static, Type } from '@sinclair/typebox';

export const createTaskParamsSchema = Type.Object({ stage_id: Type.String() });

export type CreateTaskParamsType = Static<typeof createTaskParamsSchema>;
