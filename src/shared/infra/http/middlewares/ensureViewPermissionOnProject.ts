import { FastifyRequest } from 'fastify';
import { container } from '../../containers';
import { IProjectMemberRepository } from '../../../../modules/project/repositories/models/IProjectMemberRepository';
import { HttpError } from '../../../errors/HttpError';

interface IRequest extends FastifyRequest {
  params: { project_id: string };
}

export async function ensureViewPermissionOnProject(
  request: IRequest,
): Promise<void> {
  const { project_id } = request.params;
  const { user_id } = request.headers;

  const projectRepository = container.resolve<IProjectMemberRepository>(
    'projectMemberRepository',
  );

  const projectMember = await projectRepository.findByProjectIdAndUserId(
    project_id,
    user_id as string,
  );

  if (!projectMember) {
    throw new HttpError(403, 'Permission denied!');
  }
}
