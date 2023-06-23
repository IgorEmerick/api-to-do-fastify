import { IProjectMemberRepository } from '@modules/project/repositories/models/IProjectMemberRepository';
import { User } from '@modules/user/infra/typeorm/User';
import { HttpError } from '@shared/errors/HttpError';
import { container } from '@shared/infra/containers';
import { FastifyRequest } from 'fastify';

interface IRequest extends FastifyRequest {
  user: User;
  params: { project_id: string };
}

export async function ensureAdminPermissionOnProject(
  request: IRequest,
): Promise<void> {
  console.log('TEST');

  const { project_id } = request.params;
  const { user } = request;

  const projectMemberRepository = container.resolve<IProjectMemberRepository>(
    'projectMemberRepository',
  );

  const projectMember = await projectMemberRepository.findByProjectIdAndUserId(
    project_id,
    user.id,
  );

  if (!projectMember || projectMember.permission !== 'ADMIN') {
    throw new HttpError(403, 'Permission denied!');
  }
}
