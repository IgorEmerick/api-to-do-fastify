import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTaskTable1689729394213 implements MigrationInterface {
  name = 'CreateTaskTable1689729394213';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "stage_id" uuid NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD CONSTRAINT "FK_17f963c78faafb63f7992ce0240" FOREIGN KEY ("stage_id") REFERENCES "task_stages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks" DROP CONSTRAINT "FK_17f963c78faafb63f7992ce0240"`,
    );
    await queryRunner.query(`DROP TABLE "tasks"`);
  }
}
