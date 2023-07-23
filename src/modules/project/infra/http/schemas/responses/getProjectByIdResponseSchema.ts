import { Type } from '@sinclair/typebox';
import { projectSchema } from '../entities/projectSchema';
import { taskStageSchema } from '../../../../../task/infra/http/schemas/entities/taskStageSchema';
import { taskSchema } from '../../../../../task/infra/http/schemas/entities/taskSchema';

export const getProjectByIdResponseSchema = {
  200: Type.Object({
    project: Type.Composite([
      projectSchema,
      Type.Object({
        stages: Type.Array(
          Type.Composite([
            taskStageSchema,
            Type.Object({ tasks: Type.Array(taskSchema) }),
          ]),
        ),
      }),
    ]),
  }),
};
