import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTaskUserRelation1689730665196 implements MigrationInterface {
  name = 'CreateTaskUserRelation1689730665196';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tasks_owners" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "task_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_08ead5e4868bf02a1c27feed5d4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks_owners" ADD CONSTRAINT "FK_e679ecb7f89ddb567623f08692b" FOREIGN KEY ("task_id") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks_owners" ADD CONSTRAINT "FK_2c47d6f90c15410ce524fa7af52" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks_owners" DROP CONSTRAINT "FK_2c47d6f90c15410ce524fa7af52"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tasks_owners" DROP CONSTRAINT "FK_e679ecb7f89ddb567623f08692b"`,
    );
    await queryRunner.query(`DROP TABLE "tasks_owners"`);
  }
}
