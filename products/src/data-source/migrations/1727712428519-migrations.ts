import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1727712428519 implements MigrationInterface {
    name = 'Migrations1727712428519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("productID" uuid NOT NULL DEFAULT uuid_generate_v4(), "productName" character varying NOT NULL, "quantity" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_580f3440cb4d71537c729bc34f1" PRIMARY KEY ("productID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
