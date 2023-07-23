import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateUserProjectPermissionParamsType } from '../schemas/params/updateUserProjectPermissionParamsSchema';
import { UpdateUserProjectPermissionBodyType } from '../schemas/bodies/updateUserProjectPermissionBodySchema';
import { container } from '../../../../../shared/infra/containers';
import { UpdateUserProjectPermissionService } from '../../../services/UpdateUserProjectPermissionService';

interface IRequest extends FastifyRequest {
  params: UpdateUserProjectPermissionParamsType;
  body: UpdateUserProjectPermissionBodyType;
}

export async function updateUserProjectPermissionHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { project_id } = request.params;
  const { user_id, permission } = request.body;

  const updateUserProjectPermissionService =
    container.resolve<UpdateUserProjectPermissionService>(
      'updateUserProjectPermissionService',
    );

  const projectMember = await updateUserProjectPermissionService.execute({
    permission,
    project_id,
    user_id,
  });

  reply.send({ permission: projectMember });
}
