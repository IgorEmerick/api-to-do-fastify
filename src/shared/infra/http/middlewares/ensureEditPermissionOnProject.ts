import { FastifyRequest } from 'fastify';
import { ProjectMemberRepository } from '../../../../modules/project/repositories/implementations/ProjectMemberRepository';
import { HttpError } from '../../../errors/HttpError';
import { container } from '../../containers';

interface IRequest extends FastifyRequest {
  params: { project_id: string };
}

export async function ensureEditPermissionOnProject(
  request: IRequest,
): Promise<void> {
  const { user_id } = request.headers;
  const { project_id } = request.params;

  const projectMemberRepository = container.resolve<ProjectMemberRepository>(
    'projectMemberRepository',
  );

  const projectMember = await projectMemberRepository.findByProjectIdAndUserId(
    project_id,
    user_id as string,
  );

  if (
    !projectMember ||
    (projectMember.permission !== 'ADMIN' &&
      projectMember.permission !== 'EDIT')
  ) {
    throw new HttpError(403, 'Permission denied!');
  }
}
