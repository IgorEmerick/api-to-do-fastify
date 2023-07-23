import { Type } from '@sinclair/typebox';
import { taskSchema } from '../entities/taskSchema';
import { taskOwnerSchema } from '../entities/taskOwnerSchema';

export const createTaskResponseSchema = {
  201: Type.Object({
    task: Type.Composite([
      taskSchema,
      Type.Object({ owners: Type.Array(taskOwnerSchema) }),
    ]),
  }),
};
