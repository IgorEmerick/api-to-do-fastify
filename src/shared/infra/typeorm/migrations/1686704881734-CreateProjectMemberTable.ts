import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjectMemberTable1686704881734
  implements MigrationInterface
{
  name = 'CreateProjectMemberTable1686704881734';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "projects_members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "project_id" uuid NOT NULL, "user_id" uuid NOT NULL, "permission" character varying NOT NULL, CONSTRAINT "PK_bd2347983068338335ac110d4ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects_members" ADD CONSTRAINT "FK_2b761e52355ca4a6b37f385eb12" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects_members" ADD CONSTRAINT "FK_3434643c846626365199848a06d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "projects_members" DROP CONSTRAINT "FK_3434643c846626365199848a06d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "projects_members" DROP CONSTRAINT "FK_2b761e52355ca4a6b37f385eb12"`,
    );
    await queryRunner.query(`DROP TABLE "projects_members"`);
  }
}
