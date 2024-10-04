import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1727712353030 implements MigrationInterface {
    name = 'Migrations1727712353030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("orderID" uuid NOT NULL DEFAULT uuid_generate_v4(), "isCancelled" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_812b562744f8fb149ecf2361646" PRIMARY KEY ("orderID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
