import { FastifyReply, FastifyRequest } from 'fastify';
import { UpdateProjectMembersParamsType } from '../schemas/params/updateProjectMembersParamsSchema';
import { UpdateProjectMembersBodyType } from '../schemas/bodies/updateProjectMembersBodySchema';
import { container } from '../../../../../shared/infra/containers';
import { UpdateProjectMembersService } from '../../../services/UpdateProjectMembersService';

interface IRequest extends FastifyRequest {
  params: UpdateProjectMembersParamsType;
  body: UpdateProjectMembersBodyType;
}

export async function updateProjectMembersHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { project_id } = request.params;
  const { members } = request.body;

  const updateProjectMembersService =
    container.resolve<UpdateProjectMembersService>(
      'updateProjectMembersService',
    );

  const projectMembers = await updateProjectMembersService.execute({
    members,
    project_id,
  });

  reply.send({ project_members: projectMembers });
}
