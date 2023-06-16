import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTaskStageTable1686879619450 implements MigrationInterface {
  name = 'CreateTaskStageTable1686879619450';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "task_stages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "color" character varying NOT NULL, "project_id" uuid NOT NULL, CONSTRAINT "PK_70aa7ecc35b840006f5439aa7c2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "task_stages" ADD CONSTRAINT "FK_ec2bd690b73c481aae02c86c960" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task_stages" DROP CONSTRAINT "FK_ec2bd690b73c481aae02c86c960"`,
    );
    await queryRunner.query(`DROP TABLE "task_stages"`);
  }
}
