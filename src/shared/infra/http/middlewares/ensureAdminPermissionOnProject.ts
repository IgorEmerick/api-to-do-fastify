import { FastifyRequest } from 'fastify';
import { IProjectMemberRepository } from '../../../../modules/project/repositories/models/IProjectMemberRepository';
import { HttpError } from '../../../errors/HttpError';
import { container } from '../../containers';

interface IRequest extends FastifyRequest {
  params: { project_id: string };
}

export async function ensureAdminPermissionOnProject(
  request: IRequest,
): Promise<void> {
  const { project_id } = request.params;
  const { user_id } = request.headers;

  const projectMemberRepository = container.resolve<IProjectMemberRepository>(
    'projectMemberRepository',
  );

  const projectMember = await projectMemberRepository.findByProjectIdAndUserId(
    project_id,
    user_id as string,
  );

  if (!projectMember || projectMember.permission !== 'ADMIN') {
    throw new HttpError(403, 'Permission denied!');
  }
}
