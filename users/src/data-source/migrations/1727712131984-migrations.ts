import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1727712131984 implements MigrationInterface {
    name = 'Migrations1727712131984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_6e20ce1edf0678a09f1963f9587" PRIMARY KEY ("uid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
